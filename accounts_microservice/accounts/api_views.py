from .models import AWSPhoto, Owner, State, UserModel
from .encoders import OwnerEncoder, StateEncoder, ModelEncoder
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from django.views.generic.edit import CreateView
from django.urls import reverse_lazy
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

# from .serializers import NoteSerializer

class UserModelEncoder(ModelEncoder):
    model = UserModel
    properties = ["id", "username"]

# function to call to sign in might want
#  to add a way to direct the user to the home/
@require_http_methods(["GET"])
def api_user_token(request):
    if "jwt_access_token" in request.COOKIES:
        token = request.COOKIES["jwt_access_token"]
        if token:
            return JsonResponse({"token": token})
    response = JsonResponse({"token": None})
    return response


def authenticate_user(request):
    content = json.loads(request.body)
    print(content)
    username = content[0]
    password = content[1]
    user = authenticate(username=username, password=password)
    try:
        if user.is_active:
            login(request, user)
            response = JsonResponse({"Message": "User logged in"})
            return response
        elif user.is_disabled:
            return
    except UserModel.DoesNotExist:
        response = JsonResponse({"Message": "Does not exist"})


@require_http_methods("DELETE")
def logout_view(request):
    print("hello")
    print(request)
    if request.method == "DELETE":
        logout(request)
        response = JsonResponse({"Message": "user logged out"})
        return response


@require_http_methods("POST")
def api_create_account(request):
    if request.method == "POST":
        content = json.loads(request.body)
        try:
            user = UserModel.objects.create(**content)
        except UserModel.DoesNotExist:
            return JsonResponse(
                {"message": "Failed to create user"},
                status=400)
        return JsonResponse(user, encoder=UserModelEncoder, safe=False)


@require_http_methods("POST")
def api_user_account(request):
    if request.method == "POST":
        content = json.loads(request.body)
        username = content["username"]
        try:
            user = UserModel.objects.get(username=username)
            return JsonResponse(
                user,
                encoder=UserModelEncoder,
                safe=False,
            )
        except UserModel.DoesNotExist:
            response = JsonResponse({"message": "Username does not exist"})
            response.status_code = 404
            return response







@csrf_exempt
@require_http_methods(["GET", "POST"])
def api_owners(request):
    if request.method == "GET":
        owners = Owner.objects.all()
        return JsonResponse(
            {"owners": owners},
            encoder=OwnerEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            state_id = content["state"]
            state = State.objects.get(abbreviation=state_id)
            content["state"] = state
            print(state)
            owner = Owner.objects.create(**content)
            return JsonResponse(
                owner,
                encoder=OwnerEncoder,
                safe=False,
            )
        except Owner.DoesNotExist:
            response = JsonResponse({"message": "Could not create the Owner"})
            response.status_code = 400
            return response


@csrf_exempt
@require_http_methods(["GET", "PUT", "DELETE"])
def api_owner_show_update_delete(request, pk):
    if request.method == "GET":
        owner = Owner.objects.get(id=pk)
        return JsonResponse(
            {"owner": owner},
            encoder=OwnerEncoder,
        )
    elif request.method == "DELETE":
        try:
            owner = Owner.objects.get(id=pk)
            owner.delete()
            return JsonResponse(
                owner,
                encoder=OwnerEncoder,
                safe=False,
            )
        except Owner.DoesNotExist:
            return JsonResponse({"message": "This owner does not exist"})

    else:  # PUT
        try:
            content = json.loads(request.body)
            owner = Owner.objects.get(id=pk)

            props = ["name", "email", "phone", "description", "state"]
            for prop in props:
                if prop in content:
                    setattr(owner, prop, content[prop])
            owner.save()
            return JsonResponse(
                owner,
                encoder=OwnerEncoder,
                safe=False,
            )

        except Owner.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response


@csrf_exempt
@require_http_methods(["GET", "POST"])
def api_states(request):
    if request.method == "GET":
        states = State.objects.all()
        return JsonResponse(
            {"states": states},
            encoder=StateEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            state = State.objects.create(**content)
            return JsonResponse(
                state,
                encoder=StateEncoder,
                safe=False,
            )
        except State.DoesNotExist:
            response = JsonResponse({"message": "Could not create the State"})
            response.status_code = 400
            return response


class AWSPhotoCreateView(CreateView):
    model = AWSPhoto
    template_name = "photos/upload.html"
    fields = [
        "upload",
    ]
    success_url = reverse_lazy("index")

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        photos = AWSPhoto.objects.all()
        context["Photos"] = photos
        return context


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@csrf_exempt
@api_view(['GET'])
def getRoutes(request):
    routes = [
        'api/api2/token',
        '/api/api2/token/refresh',

    ]

    return Response(routes)


# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def getNotes(request):
#     user = request.user
#     notes = user.note_set.all()
#     serializer = NoteSerializer(notes, many=True)
#     return Response(serializer.data)



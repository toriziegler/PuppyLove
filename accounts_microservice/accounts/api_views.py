from .models import AWSPhoto, Owner, State, UserAccount
from .encoders import OwnerEncoder, StateEncoder
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
# from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_http_methods
import json
from django.views.generic.edit import CreateView
from django.urls import reverse_lazy
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from .serializers import UserCreateSerializer, UserSerializer, NoteSerializer
from rest_framework.decorators import api_view, permission_classes

# from rest_framework.response import Response
# from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
# from rest_framework_simplejwt.views import TokenObtainPairView


# from .serializers import NoteSerializer


class RegisterView(APIView):
    def post(self, request):
        data = request.data
        print('register data:', data)
        serializer = UserCreateSerializer(data=data)

        if not serializer.is_valid():
            return Response(
                serializer.errors, status=status.HTTP_400_BAD_REQUEST
            )
        user = serializer.create(serializer.validated_data)
        user = UserSerializer(user)

        return Response(user.data, status=status.HTTP_201_CREATED)


class RetrieveUserView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = request.user
        user = UserSerializer(user)

        return Response(user.data, status=status.HTTP_200_OK)


def api_users(request):
    data = list(UserAccount.objects.values())
    print('data: ', data)
    return JsonResponse(data, safe=False)  # or JsonResponse({'data': data})


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getNotes(request):
    user = request.user
    notes = user.note_set.all()
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)


class UserCreate(APIView):
    """
    Creates the user.
    """

    def post(self, request, format="json"):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            print('create: ', user)
            if user:
                return Response(
                    serializer.data, status=status.HTTP_201_CREATED
                )


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


# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def getNotes(request):
#     user = request.user
#     notes = user.note_set.all()
#     serializer = NoteSerializer(notes, many=True)
#     return Response(serializer.data)

# Create your views here.

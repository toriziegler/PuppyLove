from django.shortcuts import render
from .models import Photo, Dog, Owner, State
from .encoders import DogEncoder, OwnerEncoder, StateEncoder
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

# Create your views here.


def index(request):
    photos = Photo.objects.all()
    ctx = {'photos': photos}
    return render(request, 'photos/index.html', ctx)


@csrf_exempt
@require_http_methods(["GET", "POST"])
def api_dogs(request):
    if request.method == "GET":
        dogs = Dog.objects.all()
        return JsonResponse(
            {"dogs": dogs},
            encoder=DogEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            owner_id = content["owner"]
            owner = Owner.objects.get(id=owner_id)
            content["owner"] = owner
            dog = Dog.objects.create(**content)
            return JsonResponse(
                dog,
                encoder=DogEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the Dog"}
            )
            response.status_code = 400
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
            state = State.objects.get(id=state_id)
            content["state"] = state
            print("CONTENNTTTT", content)
            owner = Owner.objects.create(**content)
            print("ONWERRRRRRRRRR", owner)
            return JsonResponse(
                owner,
                encoder=OwnerEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the Owner"}
            )
            response.status_code = 400
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
        except:
            response = JsonResponse(
                {"message": "Could not create the State"}
            )
            response.status_code = 400
            return response
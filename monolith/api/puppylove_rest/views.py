from django.shortcuts import render
from .models import Photo, Dog, Owner, State
from .encoders import DogEncoder, OwnerEncoder, StateEncoder
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from django.contrib.auth.decorators import login_required
from django.views.generic.edit import CreateView
from django.urls import reverse_lazy
import logging
from botocore.exceptions import ClientError


from .models import AWSPhoto

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
            print(owner_id, "SECONDLINE")
            print(owner, "thIIIIIRDLINE")
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

class AWSPhotoCreateView(CreateView):
    model = AWSPhoto
    template_name= "photos/upload.html"
    
    fields = ['upload', ]
    success_url = reverse_lazy('index')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        photos = AWSPhoto.objects.all()
        context['Photos'] = photos
        return context


@csrf_exempt
@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_delete_update_dog(request, pk):
    if request.method == "GET":
        try:
            dog = Dog.objects.get(id=pk)
            return JsonResponse(
                dog,
                encoder=DogEncoder,
                safe=False
            )
        except Dog.DoesNotExist:
            response = JsonResponse({"message": "This dog does not exist"})
            response.status_code = 404
            return response

    elif request.method == "DELETE": 
        try:
            service = Dog.objects.get(id=pk)
            service.delete()
            return JsonResponse(
                service,
                encoder=DogEncoder,
                safe=False,
            )
        except Dog.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})


    else:  # PUT
        try:
            content = json.loads(request.body)
            dog = Dog.objects.get(id=pk)

            props = [
        "name", "age", "breed", "description", "owner"
        ]
            for prop in props:
                if prop in content:
                    setattr(dog, prop, content[prop])
            dog.save()
            return JsonResponse(
                dog,
                encoder=DogEncoder,
                safe=False,
            )
        except Dog.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response


    
    
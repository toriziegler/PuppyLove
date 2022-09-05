from django.shortcuts import render
from .models import Dog, AWSPhoto, OwnerVO
from .encoders import DogEncoder, OwnerVOEncoder
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from django.contrib.auth.decorators import login_required
from django.views.generic.edit import CreateView
from django.urls import reverse_lazy


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
            owner = OwnerVO.objects.get(id=owner_id)
            content["owner"] = owner
            dog = Dog.objects.create(**content)
            return JsonResponse(
                dog,
                encoder=DogEncoder,
                safe=False,
            )
        except:
            response = JsonResponse({"message": "Could not create the Dog"})
            response.status_code = 400
            return response


@csrf_exempt
@require_http_methods(["GET"])
def api_owners(request):
    if request.method == "GET":
        owners = OwnerVO.objects.all()
        return JsonResponse(
            {"owners": owners},
            encoder=OwnerVOEncoder,
        )


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


@csrf_exempt
@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_delete_update_dog(request, pk):
    if request.method == "GET":
        try:
            dog = Dog.objects.get(id=pk)
            return JsonResponse(dog, encoder=DogEncoder, safe=False)
        except Dog.DoesNotExist:
            response = JsonResponse({"message": "This dog does not exist"})
            response.status_code = 404
            return response

    elif request.method == "DELETE":
        try:
            dog = Dog.objects.get(id=pk)
            dog.delete()
            return JsonResponse(
                dog,
                encoder=DogEncoder,
                safe=False,
            )
        except Dog.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})

    else:  # PUT
        try:
            content = json.loads(request.body)
            dog = Dog.objects.get(id=pk)

            props = ["name", "age", "breed", "description", "owners"]
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


@csrf_exempt
@require_http_methods("GET")
def api_ownerVOs(request):
    if request.method == "GET":
        owners = OwnerVO.objects.all()
        return JsonResponse(
            {"owners": owners},
            encoder=OwnerVOEncoder,
        )


@csrf_exempt
@require_http_methods("GET")
def api_owner_show_VO(request, pk):
    if request.method == "GET":
        owner = OwnerVO.objects.get(id=pk)
        return JsonResponse(
            {"owner": owner},
            encoder=OwnerVOEncoder,
        )

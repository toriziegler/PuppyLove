from django.shortcuts import render
from .models import Photo, Dog, Owner
from .encoders import DogEncoder
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
            print(content, "FIRSTLINE")
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

from django.shortcuts import render
from .models import AWSPhoto, Owner, State
from .encoders import OwnerEncoder, StateEncoder
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from django.contrib.auth.decorators import login_required
from django.views.generic.edit import CreateView
from django.urls import reverse_lazy
import logging
from rest_framework.response import Response
from rest_framework.decorators import api_view


from .models import AWSPhoto


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
            owner = Owner.objects.create(**content)
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
@api_view(['GET'])
def getRoutes(request):
    routes = [
        'api/api2/token',
        '/api/api2/token/refresh',
        
    ]

    return Response(routes)

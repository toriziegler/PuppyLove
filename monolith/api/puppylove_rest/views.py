from django.shortcuts import render
from .models import Photo
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

# Create your views here.


def index(request):
    photos = Photo.objects.all()
    ctx = {'photos': photos}
    return render(request, 'photos/index.html', ctx)
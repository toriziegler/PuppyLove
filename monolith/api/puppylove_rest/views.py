from django.shortcuts import render
from .models import Photo
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


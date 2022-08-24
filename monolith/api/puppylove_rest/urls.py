from django.urls import path

from .views import api_dogs, index

urlpatterns = [
    path("", index, name='index'),
    path("dogs/", api_dogs, name="api_dogs")
    ]


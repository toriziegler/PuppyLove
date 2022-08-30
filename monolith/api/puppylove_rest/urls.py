from django.urls import path

from .views import api_dogs, api_owners, api_states, index

from .views import api_dogs, index, AWSPhotoCreateView


urlpatterns = [
    path("", index, name='index'),
    path("dogs/", api_dogs, name="api_dogs"),
    path("owners/", api_owners, name="api_owners"),
    path("states/", api_states, name="api_states"),
    path("upload/", AWSPhotoCreateView.as_view(), name="photo_form"),
    ]

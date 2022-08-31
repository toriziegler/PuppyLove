from django.urls import path

from .views import api_dogs, api_owners, api_states, index

from .views import api_dogs, index, AWSPhotoCreateView

urlpatterns = [
    path("dogs/", api_dogs, name="api_dogs"),
    path("upload/", AWSPhotoCreateView.as_view(), name="photo_form")
    ]

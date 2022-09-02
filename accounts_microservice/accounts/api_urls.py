from django.urls import path
from .api_views import api_owners, api_states, AWSPhotoCreateView


urlpatterns = [
    path("owners/", api_owners, name="api_owners"),
    path("states/", api_states, name="api_states"),
    path("upload/", AWSPhotoCreateView.as_view(), name="photo_form"),
]

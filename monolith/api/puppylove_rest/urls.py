from django.urls import path

from .views import api_dogs, api_owner_show_VO, api_ownerVOs, AWSPhotoCreateView

urlpatterns = [
    path("dogs/", api_dogs, name="api_dogs"),
    path("upload/", AWSPhotoCreateView.as_view(), name="photo_form"),
    path("ownerVOs/", api_ownerVOs, name="api_ownerVOs"),
    path("ownerVOs/<int:pk>/", api_owner_show_VO, name="api_owner_show_VO"),
    ]

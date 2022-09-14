from django.urls import path
from .views import api_dogs, api_owner_show_VO, api_ownerVOs, api_owners_dogs
from .views import api_show_delete_update_dog, AWSPhotoCreateView

urlpatterns = [
    path("dogs/", api_dogs, name="api_dogs"),
    path("upload/", AWSPhotoCreateView.as_view(), name="photo_form"),
    path("ownerVOs/", api_ownerVOs, name="api_ownerVOs"),
    path("ownerVOs/<int:pk>/", api_owner_show_VO, name="api_owner_show_VO"),
    path(
        "dogs/<int:pk>/",
        api_show_delete_update_dog,
        name="api_show_delete_update_dog"
    ),
    path(
        "owners_dogs/<int:owner_id>/",
        api_owners_dogs,
        name="api_owners_dogs"
    ),
]

from django.urls import path

from .views import api_dogs, api_owners, api_states, index, api_show_delete_update_dog

from .views import api_dogs, index, AWSPhotoCreateView



urlpatterns = [
    path("", index, name='index'),
    path("dogs/", api_dogs, name="api_dogs"),
    path("owners/", api_owners, name="api_owners"),
    path("states/", api_states, name="api_states"),
    path("upload/", AWSPhotoCreateView.as_view(), name="photo_form"),
    path(
        'dogs/<int:pk>/',
        api_show_delete_update_dog,
        name="show_delete_update_dog"
    ),

    ]


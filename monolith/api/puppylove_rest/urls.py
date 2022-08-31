from django.urls import path

<<<<<<< HEAD
from .views import api_dogs, api_owners, api_show_owner, api_states, index
=======
from .views import api_dogs, api_owners, api_states, index, api_show_delete_update_dog, api_owner_show_update_delete
>>>>>>> d2d15e8a0636e5d4b60b49235ff3f4afed05c95d

from .views import api_dogs, index, AWSPhotoCreateView



urlpatterns = [
    path("", index, name='index'),
    path("dogs/", api_dogs, name="api_dogs"),
    path("owners/", api_owners, name="api_owners"),
    path("states/", api_states, name="api_states"),
    path("upload/", AWSPhotoCreateView.as_view(), name="photo_form"),
<<<<<<< HEAD
=======
    path(
        'dogs/<int:pk>/',
        api_show_delete_update_dog,
        name="show_delete_update_dog"
    ),
     path("owners/<int:pk>/", api_owner_show_update_delete, name="api_owner_show_update_delete")

>>>>>>> d2d15e8a0636e5d4b60b49235ff3f4afed05c95d
    ]


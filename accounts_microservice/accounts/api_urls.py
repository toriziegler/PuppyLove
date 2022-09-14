from django.urls import path

from .api_views import (
    api_owners,
    api_states,
    AWSPhotoCreateView,
    RegisterView,
    RetrieveUserView,
    api_users,
    getNotes,
)


urlpatterns = [
    path("owners/", api_owners, name="api_owners"),
    path("states/", api_states, name="api_states"),
    path("upload/", AWSPhotoCreateView.as_view(), name="photo_form"),
    path("register/", RegisterView.as_view()),
    path("me/", RetrieveUserView.as_view()),
    path("users/", api_users, name="api_users"),
    path("notes/", getNotes, name="getNotes"),
]

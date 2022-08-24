from django.urls import path

from .views import AWSPhotoCreateView, index

urlpatterns = [
    path("", index, name='index'),
    path("upload/", AWSPhotoCreateView.as_view(), name="photo_form")
    ]


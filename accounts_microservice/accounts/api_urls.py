from django.urls import path

from .api_views import api_owners, getRoutes, api_states, AWSPhotoCreateView, MyTokenObtainPairView, getNotes

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path("owners/", api_owners, name="api_owners"),
    path("states/", api_states, name="api_states"),
    path("upload/", AWSPhotoCreateView.as_view(), name="photo_form"),
    path('api2/', getRoutes, name="getRoutes"),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('notes/', getNotes, name="getNotes"),

    
    ]


from django.urls import path

from .api_views import api_owners, api_states, AWSPhotoCreateView, RegisterView, RetrieveUserView


urlpatterns = [
    path("owners/", api_owners, name="api_owners"),
    path("states/", api_states, name="api_states"),
    path("upload/", AWSPhotoCreateView.as_view(), name="photo_form"),
    path('register', RegisterView.as_view()),
    path('me', RetrieveUserView.as_view()),
    # path('api2/', getRoutes, name="getRoutes"),
    # path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('notes/', getNotes, name="getNotes"),
    # path('users/', UserCreate.as_view(), name="UserCreate"),

    
    ]


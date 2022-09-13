from django.urls import path
from .api_views import api_owners, api_states, AWSPhotoCreateView
# from .api_views import getRoutes, MyTokenObtainPairView  # getNotes
from .api_views import (    
    api_user_token,
    authenticate_user,
    api_create_account,
    logout_view,
    api_user_account
)
# from rest_framework_simplejwt.views import (
#     TokenRefreshView,
# )


urlpatterns = [
    path("owners/", api_owners, name="api_owners"),
    path("states/", api_states, name="api_states"),
    path("upload/", AWSPhotoCreateView.as_view(), name="photo_form"),
    # path('api2/', getRoutes, name="getRoutes"),
    # path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('notes/', getNotes, name="getNotes")
    path("login/authenticate/", authenticate_user, name="authenticate_user"),
    path("login/create_user/", api_create_account, name="create_account"),
    path("logout/", logout_view, name="logout"),
    path("user/", api_user_account, name="user"),
    path("tokens/mine/", api_user_token, name="api_user_token"),
]

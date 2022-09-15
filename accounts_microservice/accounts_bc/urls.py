from django.contrib import admin
from django.urls import path, include  # ADD INCLUDE
from rest_framework.authtoken.views import obtain_auth_token
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
#     TokenVerifyView,
# )


urlpatterns = [
    path("admin/", admin.site.urls),
    path('', include("accounts.api_urls")),
    path('auth/', obtain_auth_token),
    # path("api/token/", TokenObtainPairView.as_view()),
    # path("api/token/refresh/", TokenRefreshView.as_view()),
    # path("api/token/verify/", TokenVerifyView.as_view()),
]

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .api_views import (
    api_owners,
    api_states,
    AWSPhotoCreateView,
    ArticleViewSet,
    UserViewSet
)


router = DefaultRouter()

router.register('articles', ArticleViewSet, basename='articles')
router.register('users', UserViewSet)

urlpatterns = [
    path("owners/", api_owners, name="api_owners"),
    path("states/", api_states, name="api_states"),
    path("upload/", AWSPhotoCreateView.as_view(), name="photo_form"),
    path('api/', include(router.urls)),

]

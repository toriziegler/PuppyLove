from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .api_views import (
    api_owners,
    api_states,
    ArticleViewSet,
    UserViewSet,
    current_user,
)

router = DefaultRouter()

router.register('articles', ArticleViewSet, basename='articles')
router.register('users', UserViewSet, basename='users')


urlpatterns = [
    path('current/', current_user, name='current'),
    path("owners/", api_owners, name="api_owners"),
    path("states/", api_states, name="api_states"),
    path('api/', include(router.urls)),
]

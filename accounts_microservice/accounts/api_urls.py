from django.urls import path, include
from .api_views import ArticleViewSet, UserViewSet
from rest_framework.routers import DefaultRouter

from .api_views import (
    api_owners,
    api_states,
    ArticleViewSet,
    UserViewSet,
)

router = DefaultRouter()

router.register('articles', ArticleViewSet, basename='articles')
router.register('users', UserViewSet)


urlpatterns = [
    path("owners/", api_owners, name="api_owners"),
    path("states/", api_states, name="api_states"),
    path('api/', include(router.urls)),

]

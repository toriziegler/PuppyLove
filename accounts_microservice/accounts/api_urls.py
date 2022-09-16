from django.urls import path

from .api_views import (
    api_owners,
    api_states,
)


urlpatterns = [
    path("owners/", api_owners, name="api_owners"),
    path("states/", api_states, name="api_states"),
]

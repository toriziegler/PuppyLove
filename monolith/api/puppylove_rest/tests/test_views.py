from django.test import TestCase, Client
from django.urls import reverse
from accounts_microservice.accounts.models import Owner, State
from monolith.api.puppylove_rest.models import Dog


class TestDogs(TestCase):
    def test_list_dogs(self):
        client = Client()
        response = client.get(reverse("api_dogs"))
        self.assertEquals(response.status_code, 200)


class TestOwners(TestCase):
    def test_list_owners(self):
        client = Client()
        response = client.get(reverse("api_ownerVOs"))
        self.assertEquals(response.status_code, 200)


from django.http import JsonResponse
from django.test import TestCase, Client
from django.urls import reverse
from ..encoders import DogEncoder, OwnerVOEncoder
from ..models import Dog, OwnerVO


class TestDogs(TestCase):
    def test_list_dogs(self):
        client = Client()
        response = client.get(reverse("api_dogs"))
        self.assertEquals(response.status_code, 200)


class TestOwners(TestCase):
    def test_list_owners(self):
        client = Client()
        response = client.get(reverse("api_owners"))
        self.assertEquals(response.status_code, 200)

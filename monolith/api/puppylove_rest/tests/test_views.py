from django.test import TestCase, Client
from django.urls import reverse



class TestDogs(TestCase):
    def test_list_dogs(self):
        client = Client()
        response = client.get(reverse("api_dogs"))
        self.assertEquals(response.status_code, 200)


class TestOwners(TestCase):
    def test_list_owners(self):
        client = Client()
<<<<<<< HEAD
        response = client.get(reverse("api_owners"))
=======
        response = client.get(reverse("api_ownerVOs"))
>>>>>>> daf3df8392dd79b88e37eb980360440ee3afd9c9
        self.assertEquals(response.status_code, 200)

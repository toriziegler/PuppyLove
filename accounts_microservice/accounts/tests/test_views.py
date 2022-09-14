from django.test import TestCase, Client
from django.urls import reverse


class TestStates(TestCase):
    def test_list_states(self):
        client = Client()
        response = client.get(reverse("api_states"))
        self.assertEquals(response.status_code, 200)


class TestOwners(TestCase):
    def test_list_owners(self):
        client = Client()
        response = client.get(reverse("api_owners"))
        self.assertEquals(response.status_code, 200)


# class TestPostOwners(TestCase):
#     def test_post_owners(self):
#         client = Client()
#         response = client.post(
#             reverse("api_owners"), {'name': 'SecretAgent', 'email': 'secret@cia.com', 'image': 'None', 'phone': '1234567899', 'description': 'Secret', 'state': 'Ohio'})
#         self.assertEquals(response.status_code, 200)

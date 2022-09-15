from django.test import TestCase, Client, SimpleTestCase
from django.urls import reverse, resolve
from accounts.models import Owner, State


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


class TestOwnerDelete(TestCase):
    def test_list_owners(self):
        client = Client()
        response = client.delete(reverse("api_owners"))
        self.assertEquals(response.status_code, 200)


class TestUsers(TestCase):
    def test_list_owners(self):
        client = Client()
        response = client.get(reverse("api_users"))
        self.assertEquals(response.status_code, 200)

# class TestPostOwners(TestCase):
#     def test_post_owners(self):

#         client = Client()
#         response = client.post(reverse("api_owners"),
#                                testOwner=Owner(
#             name='SecretAgent',
#             email='secret@cia.com',
#             image='None',
#             phone='1234567899',
#             description='Secret',
#             state=State(name="Arizona")
#         ))
#         self.assertEquals(response.status_code, 200)

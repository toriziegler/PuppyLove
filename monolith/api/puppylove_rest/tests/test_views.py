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


# class TestPostDogs(TestCase):
#     def test_post_dogs(self):
#         client = Client()
#         response = client.post(reverse("api_dogs"))
#         self.assertEquals(response.status_code, 200)

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


# class TestPostDogs(TestCase):
#     def test_post_dogs(self):

#         client = Client()
#         response = client.post(reverse("api_dogs"),
#                                TestDogs=Dog(
#             name='Doggo',
#             age='3',
#             breed='Labor-doodle',
#             size='Medium',
#             gender='male',
#             description='hello am dog',
#             owner=Owner(name=SecretAgent)
#         ))
#         self.assertEquals(response.status_code, 200)




# class SearchFormTestCase(TestCase):
#     def test_empty_get(self):
#         response = self.client.get('/en/dev/search/', HTTP_HOST="puppylove":8080')
#         self.assertEqual(response.status_code, 200)
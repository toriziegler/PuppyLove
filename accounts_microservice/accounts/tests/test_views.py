
from django.test import TestCase, Client
from django.urls import reverse
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


class TestPostOwners(TestCase):
    def setUp(self):
        st = State.objects.create(
            name='TheSouth',
            id=55,
            abbreviation='TS',
        )
        Owner.objects.create(
            name='SecretAgent',
            email='secret@cia.com',
            image='None',
            phone='1234567899',
            description='Secret',
            state=st
        )

    def test_owner_create(self):
        coolGuy = Owner.objects.get(description='Secret')
        self.assertEquals(coolGuy.name, 'SecretAgent')

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


class TestPostDogs(TestCase):
    def setUp(self):
        st = State.objects.create(
            name='Alfie',
            id=55,
            abbreviation='TX',
        )
        Owner.objects.create(
            name='Annie',
            email='annie@alfie.com',
            image='None',
            phone='1234567899',
            description='grumpydog',
            state=st
        )

    def test_owner_create(self):
        coolGuy = Owner.objects.get(description='grumpydog')
        self.assertEquals(coolGuy.name, 'Annie')


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


# --------------------------------------------------------- #
# Nikos unit test

from django.test import TestCase

from rest_framework.test import APIClient

from rest_framework.test import APITestCase
from django.contrib.auth.models import User


class CheckUserViewTest(APITestCase, TestCase):

    def testUserViewSet(self):
        api_client = APIClient()
        response = api_client.get(path="/api/users/")
        assert response.status_code == 200

    def test_check_user(self):
        user = User.objects.create_user('Nico', '12345')
        self.client.force_authenticate(user)
        print(user, "THISISYOURUSER")
        response = self.client.get(path="/api/users/")
        assert response.status_code == 200

# --------------------------------------------------------- #


class TestDependencies(TestCase):
    def test_Flake8_install(self):
        try:
            import flake8
        except ModuleNotFoundError:
            self.fail("Flake8 is not installed")


class UpdateOwner(TestCase):
    def setUp(self):
        st = State.objects.create(
            name='Alfie',
            id=55,
            abbreviation='TX',
        )
        Owner.objects.create(
            name='Ann',
            email='ann@alfie.com',
            image='None',
            phone='1234567877',
            description='gumpdog',
            state=st
        )

    def test_update_owner(self):
        """ Test UpdateForm with valid data """
        person = Owner.objects.filter(name='Ann').update(name="Jim")
        self.assertEquals(person, 1)


class add(TestCase):
    def add_num(self):
        num = 1 + 1
        self.asserte(num, 2)

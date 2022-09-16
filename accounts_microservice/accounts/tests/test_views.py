
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



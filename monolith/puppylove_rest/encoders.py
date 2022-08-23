from common.json import ModelEncoder

from .models import Dog, Owner


class OwnerEncoder(ModelEncoder):
    model = Owner
    properties = [
        "name",
        "email",
        "phone",
        "description",
        "state",
    ]


class DogEncoder(ModelEncoder):
    model = Dog
    properties = [
        "name",
        "age",
        "breed",
        "picture",
        "description",
        "id",
        "owner"
    ]
    encoders = {
        "owner" : OwnerEncoder()
    }


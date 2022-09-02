from common.json import ModelEncoder

from .models import Dog, OwnerVO


class OwnerVOEncoder(ModelEncoder):
    model = OwnerVO
    properties = ["name", "email", "phone", "description", "state"]


class DogEncoder(ModelEncoder):
    model = Dog
    properties = ["name", "age", "breed", "description", "id", "owner"]
    encoders = {"owner": OwnerVOEncoder()}

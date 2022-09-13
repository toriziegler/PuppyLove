from common.json import ModelEncoder

from .models import Dog, OwnerVO


class OwnerVOEncoder(ModelEncoder):
    model = OwnerVO
    properties = ["name", "email",
                  "phone", "description", "state", "id"]


class DogEncoder(ModelEncoder):
    model = Dog
    properties = ["name", "age", "breed", "description", "id", "owner"]
    encoders = {"owner": OwnerVOEncoder()}

    def get_extra_data(self, o):
        return {"image": o.id}

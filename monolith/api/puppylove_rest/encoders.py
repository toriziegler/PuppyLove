from common.json import ModelEncoder

from .models import Dog, Owner, State


class OwnerEncoder(ModelEncoder):
    model = Owner
    properties = [
        "name",
        "email",
        "phone",
        "id",
        "description",
    ]
    def get_extra_data(self, o):
        return {"state": o.state.abbreviation}


class DogEncoder(ModelEncoder):
    model = Dog
    properties = [
        "name",
        "age",
        "breed",
        "description",
        "id",
        "owner"
    ]
    encoders = {
        "owner" : OwnerEncoder()
    }

class StateEncoder(ModelEncoder):
    model = State
    properties = [
        "name",
        "abbreviation",
        "id",
    ]
    encoders = {
        "owner" : OwnerEncoder()
    }

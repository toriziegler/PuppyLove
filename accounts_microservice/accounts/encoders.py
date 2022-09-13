from common.json import ModelEncoder
from .models import Owner, State


class OwnerEncoder(ModelEncoder):
    model = Owner
    properties = [
        "name",
        "email",
        "phone",
        "description",
        "id",
    ]

    def get_extra_data(self, o):
        return {"state": o.state.abbreviation}


class StateEncoder(ModelEncoder):
    model = State
    properties = [
        "name",
        "abbreviation",
        "id",
    ]
    encoders = {"owner": OwnerEncoder()}

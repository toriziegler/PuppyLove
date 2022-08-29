# from common.json import ModelEncoder

# from .models import Dog


# class OwnerVOEncoder(ModelEncoder):
#     model = OwnerVO
#     properties = [
#         "name",
#         "email",
#         "phone",
#         "id",
#         "description",
#         "state"
#     ]


# class DogEncoder(ModelEncoder):
#     model = Dog
#     properties = [
#         "name",
#         "age",
#         "breed",
#         "description",
#         "id",
#         "owner"
#     ]
#     encoders = {
#         "owner" : OwnerVOEncoder()
#     }

# class StateEncoder(ModelEncoder):
#     model = State
#     properties = [
#         "name",
#         "abbreviation",
#         "id",
#     ]
#     encoders = {
#         "owner" : OwnerEncoder()
#     }

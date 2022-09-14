from json import JSONEncoder
from django.urls import NoReverseMatch
from django.db.models import QuerySet
from django.db import models

# from django.core import serializers

# JSONSerializer = serializers.get_serializer("json")


# class JSONWithURLSerializer(JSONSerializer):

#     def handle_field(self, obj, field):
#         value = field.value_from_object(obj)
#         if isinstance(field, models.FileField) and hasattr('url', value):
#             self._current[field.name] = value.url
#         else:
#             return super(
#                 JSONWithURLSerializer, self).handle_field(obj, field)


# serializer = JSONWithURLSerializer()
# serializer.serialize(queryset)
# data = serializer.getvalue()


class ImageEncoder(JSONEncoder):
    def default(self, o):
        if isinstance(o, models.FileField):
            return o.name
        else:
            return super().default(o)


class QuerySetEncoder(JSONEncoder):
    def default(self, o):
        if isinstance(o, QuerySet):
            return list(o)
        else:
            return super().default(o)


class ModelEncoder(ImageEncoder, QuerySetEncoder, JSONEncoder):
    encoders = {}

    def default(self, o):
        if isinstance(o, self.model):
            d = {}
            if hasattr(o, "get_api_url"):
                try:
                    d["href"] = o.get_api_url()
                except NoReverseMatch:
                    pass
            for property in self.properties:
                value = getattr(o, property)
                if property in self.encoders:
                    encoder = self.encoders[property]
                    value = encoder.default(value)
                d[property] = value
            d.update(self.get_extra_data(o))
            return d
        else:
            return super().default(o)

    def get_extra_data(self, o):
        return {}

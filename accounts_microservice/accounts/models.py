from django.db import models
from django.core.validators import MaxValueValidator
import uuid

class State(models.Model):
    name = models.CharField(max_length=40)
    abbreviation = models.CharField(max_length=2, unique=True)

    def str(self):
        return f"{self.abbreviation}"

    class Meta:
        ordering = ("abbreviation",)  # Default ordering for State


class Owner (models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.PositiveSmallIntegerField(validators=[MaxValueValidator(9999999999)])
    description = models.TextField(max_length=1000)
    account_number = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    state = models.ForeignKey(State, related_name="+", on_delete=models.PROTECT)

    def str(self):
        return f"{self.name}"


class AWSPhoto(models.Model):
    uploaded_at = models.DateTimeField(auto_now_add=True)
    owner_id = models.ForeignKey(Owner, related_name="photo", on_delete=models.PROTECT)
    upload = models.FileField()
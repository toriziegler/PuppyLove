from django.db import models
import uuid
from django.core.validators import MaxValueValidator


class OwnerVO (models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.BigIntegerField(validators=[MaxValueValidator(9999999999)])
    description = models.TextField(max_length=1000)
    account_number = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    state = models.CharField(max_length=2)

    def str(self):
        return f"{self.name}"


class Dog (models.Model):
    name = models.CharField(max_length=200)
    age = models.SmallIntegerField(null=True, blank=True)
    breed = models.CharField(max_length=100, default="mix")
    description = models.TextField(max_length=1000, null=True, blank=True)
    # documentation = models.FileField(null=True, blank=True)
    owner = models.ForeignKey(
        OwnerVO,
        related_name="owner",
        on_delete=models.CASCADE,
        null=False
    )

    def str(self):
        return f"{self.name}"


class AWSPhoto(models.Model):
    uploaded_at = models.DateTimeField(auto_now_add=True)
    owner_id = models.ForeignKey(
        OwnerVO,
        related_name="photo",
        on_delete=models.PROTECT
    )
    upload = models.FileField()

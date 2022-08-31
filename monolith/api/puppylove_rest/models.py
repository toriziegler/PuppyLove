from django.db import models
from puppylove.settings import MEDIA_ROOT
from cloudinary.models import CloudinaryField
from django.core.validators import MaxValueValidator

# from phonenumber_field.modelfields import PhoneNumberField


class State(models.Model):
    """
    The State model represents a US state with its name
    and abbreviation.

    State is a Value Object and, therefore, does not have a
    direct URL to view it.
    """

    name = models.CharField(max_length=40)
    abbreviation = models.CharField(max_length=2, unique=True)

    def str(self):
        return f"{self.name}"

    class Meta:
        ordering = ("abbreviation",)  # Default ordering for State

class Owner (models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.PositiveSmallIntegerField(validators=[MaxValueValidator(9999999999)])
    description = models.TextField(max_length=1000)
    state = models.ForeignKey(State, related_name="+", on_delete=models.PROTECT)

    def str(self):
        return f"{self.name}"


class Dog (models.Model):
    name = models.CharField(max_length=200)
    age = models.SmallIntegerField(null=True, blank=True)
    breed = models.CharField(max_length=100, default="mix")
    # picture = models.ImageField(upload_to=MEDIA_ROOT, null=True, blank=True, height_field=None, width_field=None)
    description = models.TextField(max_length=1000, null=True, blank=True)
    # documentation = models.FileField(null=True, blank=True)
    owner = models.ForeignKey(Owner, related_name="owner", on_delete=models.CASCADE, null=False)

    def str(self):
        return f"{self.name}"



class Photo(models.Model):
    image = CloudinaryField('image')

class AWSPhoto(models.Model):
    uploaded_at = models.DateTimeField(auto_now_add=True)
    upload = models.FileField()

from django.db import models
from puppylove.settings import MEDIA_ROOT

# from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.

class State(models.Model):
    """
    The State model represents a US state with its name
    and abbreviation.

    State is a Value Object and, therefore, does not have a
    direct URL to view it.
    """

    id = models.PositiveIntegerField(primary_key=True)
    name = models.CharField(max_length=40)
    abbreviation = models.CharField(max_length=2, unique=True)

    def __str__(self):
        return f"{self.abbreviation}"

class Meta:
    ordering = ("abbreviation",)  # Default ordering for State

class Owner (models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.TextField(max_length=10)
    description = models.TextField(max_length=1000)
    state = models.ForeignKey(State, related_name="+", on_delete=models.PROTECT)

class Dog (models.Model):
    name = models.CharField(max_length=200)
    age = models.SmallIntegerField()
    breed = models.CharField(max_length=100)
    picture = models.ImageField(upload_to=MEDIA_ROOT, null=True, blank=True, height_field=None, width_field=None)
    description = models.TextField(max_length=1000)
    # documentation = models.FileField()
    owner = models.ForeignKey(Owner, related_name="owner", on_delete=models.CASCADE)






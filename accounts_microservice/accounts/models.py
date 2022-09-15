from django.db import models


def user_directory_path(instance, filename):
    return "user_{0}/{1}".format(instance.name, filename)


class State(models.Model):
    name = models.CharField(max_length=40)
    id = models.IntegerField(primary_key=True)
    abbreviation = models.CharField(max_length=2, unique=True)

    def __str__(self):
        return f"{self.name}, {self.abbreviation}"

    class Meta:
        ordering = ("id",)  # Default ordering for State


class Owner(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    image = models.FileField(
        null=True,
        blank=True,
        upload_to=user_directory_path
    )
    phone = models.PositiveBigIntegerField(unique=True)
    description = models.TextField(max_length=1000)
    state = models.ForeignKey(
        State, related_name="+", on_delete=models.PROTECT)

    def __str__(self):
        return f"{self.name}"


class AWSPhoto(models.Model):
    uploaded_at = models.DateTimeField(auto_now_add=True)
    owner_id = models.ForeignKey(
        Owner, related_name="photo", on_delete=models.PROTECT)
    upload = models.FileField()

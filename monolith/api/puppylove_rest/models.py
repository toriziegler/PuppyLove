from django.db import models


class OwnerVO(models.Model):
    state = models.CharField(max_length=2, unique=True)
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.PositiveBigIntegerField()
    description = models.TextField(max_length=1000)

    def __str__(self):
        return f"{self.name}"


class Dog(models.Model):
    name = models.CharField(max_length=200)
    age = models.SmallIntegerField(null=True, blank=True)
    breed = models.CharField(max_length=100, default="mix")
    image = models.FileField(upload_to='dogs')
    description = models.TextField(max_length=1000, null=True, blank=True)
    owner = models.ForeignKey(
        OwnerVO, related_name="owner", on_delete=models.CASCADE, null=False
    )

    def __str__(self):
        return f"{self.name}"


class AWSPhoto(models.Model):
    uploaded_at = models.DateTimeField(auto_now_add=True)
    owner_id = models.ForeignKey(
        OwnerVO, related_name="photo", on_delete=models.PROTECT
    )
    upload = models.FileField()

from django.db import models
# from django.core.validators import MaxValueValidator
# import uuid
from django.contrib.auth.models import (
  BaseUserManager,
  AbstractBaseUser,
  PermissionsMixin)


class UserAccountManager(BaseUserManager):
  def create_user(self, first_name, last_name, email, password=None):
    if not email:
      raise ValueError('Users must have an email address')

    email = self.normalize_email(email)
    email = email.lower()

    user = self.model(
      first_name=first_name,
      last_name=last_name,
      email=email,
    )

    user.set_password(password)
    user.save()

    return user

  def create_superuser(self, first_name, last_name, email, password=None):
    user = self.create_user(
      first_name,
      last_name,
      email,
      password=password,
    )

    user.is_staff = True
    user.is_superuser = True
    user.save()

    return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
  first_name = models.CharField(max_length=255)
  last_name = models.CharField(max_length=255)
  email = models.EmailField(unique=True, max_length=255)
  is_active = models.BooleanField(default=True)
  is_staff = models.BooleanField(default=False)

  objects = UserAccountManager()

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['first_name', 'last_name']

  def __str__(self):
    return self.email


class Note(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE, null=True)
    body = models.TextField()


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
    phone = models.PositiveBigIntegerField()
    description = models.TextField(max_length=1000)
    state = models.ForeignKey(
        State,
        related_name="+",
        on_delete=models.PROTECT
    )

    def __str__(self):
        return f"{self.name}"


class AWSPhoto(models.Model):
    uploaded_at = models.DateTimeField(auto_now_add=True)
    owner_id = models.ForeignKey(
        Owner,
        related_name="photo",
        on_delete=models.PROTECT
    )
    upload = models.FileField()


# class Note(models.Model):
#     user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
#     body = models.TextField()


# class User(AbstractUser):
#     pass

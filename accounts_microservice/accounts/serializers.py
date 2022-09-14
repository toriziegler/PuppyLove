from django.contrib.auth.password_validation import validate_password
from django.core import exceptions
from rest_framework import serializers
from .models import Note
from django.contrib.auth import get_user_model

User = get_user_model()


class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("first_name", "last_name", "email", "password")

    def validate(self, data):
        user = User(**data)
        password = data.get("password")

        try:
            validate_password(password, user)
        except exceptions.ValidationError as e:
            serializer_errors = serializers.as_serializer_error(e)
            raise exceptions.ValidationError(
                {"password": serializer_errors["non_field_errors"]}
            )

        return data

    def create(self, validated_data):
        user = User.objects.create_user(
            first_name=validated_data["first_name"],
            last_name=validated_data["last_name"],
            email=validated_data["email"],
            password=validated_data["password"],
        )

        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "first_name",
            "last_name",
            "email",
        )


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = "__all__"


# from rest_framework.serializers import ModelSerializer
# # from .models import Note
# from rest_framework import serializers
# from rest_framework.validators import UniqueValidator
# from django.contrib.auth.models import User


# class NoteSerializer(ModelSerializer):
#     class Meta:
#         model = Note
#         fields = '__all__'


# class UserSerializer(serializers.ModelSerializer):
#     email = serializers.EmailField(
#             required=True,
#             validators=[UniqueValidator(queryset=User.objects.all())]
#             )
#     username = serializers.CharField(
#             max_length=32,
#             validators=[UniqueValidator(queryset=User.objects.all())]
#             )
#     password = serializers.CharField(min_length=6, max_length=100,
#             write_only=True)

#     def create(self, validated_data):
#         user = User(email=validated_data['email'],
#                 username=validated_data['username'])
#         user.set_password(validated_data['password'])
#         user.save()
#         return user

#     class Meta:
#         model = User
#         fields = ('id', 'username', 'email', 'password')

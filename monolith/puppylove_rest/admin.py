from django.contrib import admin
from .models import Dog, State, Owner, Photo
# Register your models here.

@admin.register(Dog)
class DogAdmin(admin.ModelAdmin):
    pass

@admin.register(State)
class StateAdmin(admin.ModelAdmin):
    pass

@admin.register(Owner)
class OwnerAdmin(admin.ModelAdmin):
    pass

@admin.register(Photo)
class PhotoAdmin(admin.ModelAdmin):
    pass
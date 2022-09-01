from django.contrib import admin
from .models import Owner, State


@admin.register(Owner)
class OwnerAdmin(admin.ModelAdmin):
    pass


@admin.register(State)
class StateAdmin(admin.ModelAdmin):
    pass

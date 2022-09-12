from django.contrib import admin
from .models import Owner, State
# from django.contrib.auth.admin import UserAdmin

# Register your models here.

@admin.register(Owner)
class OwnerAdmin(admin.ModelAdmin):
    pass

@admin.register(State)
class StateAdmin(admin.ModelAdmin):
    pass

# admin.site.register(User, UserAdmin)


# admin.site.register(Note)
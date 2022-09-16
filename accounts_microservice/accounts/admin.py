from django.contrib import admin
from .models import Owner, State, Article

# Register your models here.


@admin.register(Owner)
class OwnerAdmin(admin.ModelAdmin):
    pass


@admin.register(State)
class StateAdmin(admin.ModelAdmin):
    pass


@admin.register(Article)
class ArticleModel(admin.ModelAdmin):
    list_filter = ("title", "description")
    list_display = ("title", "description")

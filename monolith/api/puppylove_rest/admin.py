from django.contrib import admin
from .models import Dog, AWSPhoto, OwnerVO

# Register your models here.


@admin.register(Dog)
class DogAdmin(admin.ModelAdmin):
    pass


@admin.register(OwnerVO)
class OwnerVOAdmin(admin.ModelAdmin):
    pass


@admin.register(AWSPhoto)
class AWSPhotoAdmin(admin.ModelAdmin):
    pass

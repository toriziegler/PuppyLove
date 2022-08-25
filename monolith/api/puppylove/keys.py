import cloudinary
import cloudinary.uploader
import cloudinary.api

#Cloudinary
CLOUDname = "puppy-love-api", 
APIkey = "935115688382825", 
APIsecret = "3_jy4PvZpB8hPWVxTB1NRJjTueQ" 


ACCESS_KEY_ID = 'AKIAXEN45OHVVO4367Y7'
SECRET_ACCESS_KEY = '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'
STORAGE_BUCKET_NAME = 'puppy-love-assets'
S3_CUSTOM_DOMAIN = '%s.s3.amazonaws.com' % STORAGE_BUCKET_NAME
LOCATION = 'static'
STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
STATIC_URL = "https://%s/%s/" % (S3_CUSTOM_DOMAIN, LOCATION)
DEFAULT_FILE_STORAGE = 'puppylove.storage_backends.MediaStorage'  # <-- here is where we reference it
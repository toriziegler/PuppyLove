from storages.backends.s3boto3 import S3Boto3Storage
from accounts_bc.settings import AWS_STORAGE_BUCKET_NAME


class MediaStorage(S3Boto3Storage):
    bucket_name = AWS_STORAGE_BUCKET_NAME
    location = "us-east-1"
    file_overwrite = False

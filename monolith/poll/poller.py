import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "puppylove.settings")
django.setup()

from puppylove_rest.models import OwnerVO


def get_owners():
    response = requests.get("http://account-api:8000/owners/")
    content = json.loads(response.content)
    for owner in content["owners"]:
        OwnerVO.objects.update_or_create(
            id=owner["id"],
            defaults={
                "name": owner["name"],
                "email": owner["email"],
                "phone": owner["phone"],
                "description": owner["description"],
                "state": owner["state"],
            },
        )


def poll():
    while True:
        print("Owner poller polling for data")
        try:
            get_owners()
            pass
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(30)


if __name__ == "__main__":
    poll()

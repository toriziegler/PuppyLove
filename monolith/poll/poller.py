import django
import os
import sys
import time
import json
import requests

sys.path.append("../api")
# host = 'http://account-api:8000'
host = 'https://puppylove-accounts-api.herokuapp.com'
# host = os.environ.get('REACT_APP_ACCOUNT_API', 'MISCONFIGURED!')
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "puppylove.settings")
django.setup()

from puppylove_rest.models import OwnerVO


def get_owners():
    url = host + '/api/owners/'
    response = requests.get(url)
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

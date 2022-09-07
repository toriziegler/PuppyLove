FROM python:3.10-bullseye
RUN python -m pip install --upgrade pip
WORKDIR /app

# Copy the top-level files
COPY requirements.txt requirements.txt
COPY manage.py manage.py
COPY data.json data.json

# Copy the Django project and all Django apps
COPY accounts accounts
COPY accounts_bc accounts_bc
COPY common common

RUN pip install -r requirements.txt
CMD python manage.py migrate && gunicorn accounts_bc.wsgi --bind 0.0.0.0:$PORT --log-file -
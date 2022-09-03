FROM python:3.10-bullseye
RUN python -m pip install --upgrade pip
WORKDIR /app

# Copy the top-level files
COPY requirements.txt requirements.txt
COPY poller.py poller.py

# Copy the Django project and all Django apps
COPY puppylove puppylove
COPY puppylove_rest puppylove_rest
COPY common common
COPY media media

RUN pip install -r requirements.txt
CMD python poller.py
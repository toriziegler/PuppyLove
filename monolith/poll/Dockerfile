FROM python:3.10-bullseye
RUN python -m pip install --upgrade pip
WORKDIR /app


COPY requirements.txt requirements.txt
COPY poller.py poller.py

COPY api/puppylove puppylove
COPY api/puppylove_rest puppylove_rest
COPY api/common common

RUN pip install -r requirements.txt
CMD python poller.py

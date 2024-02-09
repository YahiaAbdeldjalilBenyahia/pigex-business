FROM python:latest

RUN apt update -y && apt upgrade -y

RUN mkdir /app

COPY ./app/requirements.txt /app/requirements.txt

WORKDIR /app

RUN pip install -r requirements.txt

COPY ./app /app

RUN chmod +x launch.sh

CMD [ "./launch.sh" ]
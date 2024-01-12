The Event Logger service is a component developed for a microservice architecture in TypeScript using
Node.js platform. It is designed to register and log events occurring in the system.

The main purpose of the Event Logger service is to collect and aggregate data about individual events in the system. It allows
record various types of events such as errors, informational messages, important events, etc.

Main functionality of Event Logger:

Event registration: the service allows you to register events by passing them relevant information such as type,
description, additional parameters and timestamp.
Data storage: All logged events are stored in a suitable data storage, such as a database or
centralized event log.
Processing and aggregation: the service is capable of processing and aggregating registered events in a human-readable format,
so that information can be analyzed and synthesized.

0. Fill in .env.
````
LOG_LEVEL=debug|info|error
DEBUG=1|0
RABBITMQ_HOST=
RABBITMQ_PORT=
RABBITMQ_USER=
RABBITMQ_PASS=
RABBITMQ_QUEUE=
RABBITMQ_VHOST=
INTERNAL_PORT=
EXTERNAL_PORT=
````
Launch:
````
docker-compose up -d
````
In a docker container
````
npm i
make migration/db/create db.db;
make migration/up;
npm run build
````
In the project folder:
````
docker-compose restart
````
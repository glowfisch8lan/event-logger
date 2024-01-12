#!/bin/bash
echo "DEBUG is ${DEBUG}"

if [ "$DEBUG" = 1 ]; then
  npm run dev
else
  echo "RUN PROD"
  npm run start
fi

while true; do sleep 60; done;
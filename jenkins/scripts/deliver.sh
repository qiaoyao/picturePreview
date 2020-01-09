#!/usr/bin/env sh

echo 'start koa2 application'

set -x
npm run start
set +x

echo 'Visit http://localhost:3000 to see your koa2 application in action.'
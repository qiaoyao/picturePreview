#!/usr/bin/env sh

echo 'start koa2 application'

set -x
npm run start &
sleep 1
echo $! > .pidfile
set +x

exit

echo 'Visit http://localhost:3000 to see your koa2 application in action.'
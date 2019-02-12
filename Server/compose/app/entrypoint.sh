#!/bin/bash
set -e
cmd="$@"

function mysql_ready(){
  node compose/app/mysql-connection-test.js
}

until mysql_ready; do
  >&2 echo "MySQL is unavailable - sleeping"
  sleep 1
done

>&2 echo "MySQL is up - continuing..."
exec $cmd

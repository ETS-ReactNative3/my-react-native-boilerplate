#!/bin/bash
# stop on errors
set -e

echo "creating backup"
echo "---------------"

FILENAME=backup_$(date +'%Y_%m_%dT%H_%M_%S').sql.gz

mysqldump --all-databases --user=root --password=$MYSQL_ROOT_PASSWORD | gzip > /backups/$FILENAME

echo "successfully created backup $FILENAME"

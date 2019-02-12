FROM mysql:5.7

# add backups scripts and mark them as executable
ADD backup.sh /usr/local/bin/backup
# ADD restore.sh /usr/local/bin/restore
ADD list-backups.sh /usr/local/bin/list-backups

RUN chmod +x /usr/local/bin/backup
# RUN chmod +x /usr/local/bin/restore
RUN chmod +x /usr/local/bin/list-backups

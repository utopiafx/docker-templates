# postgresql_alpine template

This template is using Postgres and Alpine.

## Instructions

There is two possible way to use this.
One is to directly use the docker-compose.yml file
by typing

```
$ docker build -t %imagename% .
```

And then start it with

```
$ docker run -it --rm --name %containername% %imagename%
```

replace the %imagename% and %containername% with your name.

This will quickly setup and make it running.

The other way is to use docker-compose.yml
if you plan to build this template with other services etc,
then type something like

```
$ docker-compose up
```

The thing here is that you also have to
write your own script in startup.sql file.
This is the basic setup for your database you creating.

Also remember that mapping port for database not always should be exposed out
to the public, but only for your own system containers. 

Further more, there is even possible to creating snapshots from the database 
in the container and also daily backups if needed.


** Creating a snapshot **

```
docker run --name postgresql-snapshot -itd --restart always \
  --link postgresql-master:master \
  --env 'REPLICATION_MODE=snapshot' --env 'REPLICATION_SSLMODE=prefer' \
  --env 'REPLICATION_HOST=master' --env 'REPLICATION_PORT=5432'  \
  --env 'REPLICATION_USER=repluser' --env 'REPLICATION_PASS=repluserpass' \
  registry.timmertech.nl/docker/apline-postgresql:10.3
```

** Creating backup **

```
docker run --name postgresql-backup -it --rm \
  --link postgresql-master:master \
  --env 'REPLICATION_MODE=backup' --env 'REPLICATION_SSLMODE=prefer' \
  --env 'REPLICATION_HOST=master' --env 'REPLICATION_PORT=5432'  \
  --env 'REPLICATION_USER=repluser' --env 'REPLICATION_PASS=repluserpass' \
  --volume /srv/docker/backups/postgresql.$(date +%Y%m%d%H%M%S):/var/lib/postgresql \
  registry.timmertech.nl/docker/apline-postgresql:10.3
```

Use the backup for instance in a cronjob if you like. 
The honey badger doesn't care.


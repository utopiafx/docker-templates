# nginx-node-postgres template

This template is using Nginx , Node, Postgres in a simple webserver.
A basic setup, which you could of course modify or build more with
custom services or official services like redis etc.

## Instructions

For building its image throw docker command

```
$ docker build -t %imagename% .

```

Replace %imagename% with custom name for the image you creating.
the '.' after means that you searching for the Dockerfile in that directory you standin
which in order you need to build the image. You could specify another filename and path 
changing with -f flag and write another path instead of the dot above.

Once you have the image correctly created, then running in development mode would be:

```
$ docker run -it --rm --name %containername% %imagename%
```

For running on a specific port outwards:

```
$ docker run -it --rm -p 4500:3000 --name %containername% %imagename%
```

The go to browser and start with:

```
localhost:4500
```

To stop the container , If its running and can't be cancel with (CMD/CTRL) + C:

```
docker stop %containername%
```

To remove container

```
$ docker rmi -f %containername%
```

To remove the image

```
$ docker rm -f %imagename%
```

** Notice:
Replace all the %containername% above with the containername you choosed and
%imagename% with the imagename you first choosed in docker build.


For checking for which container is running

```
$ docker ps
```

For checking all images that is created

```
$ docker images
```

Using docker-compose to start up:

```
$ docker-compose up
```

** Notice:
If you wanna run it in background like daemon, use -d after up

To shut it down

```
$ docker-compose down
```

Sometimes you need to build the image first and then start container

```
$ docker-compose build
```

Some problem could occures, when using docker-compose for
the docker-compose.yml file, but what you will have to do
is after you built throw docker-compose with docker-compose build
is to write:

```
$ docker-compose down
$ docker-compose up --build
```

or try to to add /home/app/node_modules if you forget that
in the docker-compose.yml fil for the app1

And it should works again! 

If you wanna clean faster rather than write 
each command everytime you will remove container and images
then you could write

```
$ cleanup.sh containerid nodesimageid
```

Rebuilding again, without using above cleanup etc, if not needed.
Then use this simple command instead

First press ctrl + C or CMD + C to break if not running in background

```
$ rebag.sh
```


## Details

nodejs server is running on port 3000 inside the container.
It is mapped to port 5400 to the host and therefor it is exposed
for the outer world , clients and other services outside the container. 



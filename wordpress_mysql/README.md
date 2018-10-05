# Wordpress-mysql template

Simple setup for using Wordpress, MySQL, Ubuntu with PHP running
Its not even mine idea.

## Instructions

Start:
```
docker-compose up -d

And open browser and install the wordpress as normal throw localhost:8000


list containers and images:

```
> docker container ls
> docker-compose ps
> docker images
```

Stop containers and images and remove them:

```
> docker container stop <containerID>
> docker-compose down
> docker rmi -f <imageID>
```
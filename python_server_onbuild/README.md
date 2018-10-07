# python-server-onbuild

Template that combine Python Server ontop of a onbuild linux.
This is a simple setup for building servers with python.

## Instructions

If you wanna develope and test it first before you build an image of it, 
then use pip command like

```
$ sudo pip install -r requirements.txt
```

Sometimes sudo is not needed, depending how you have setup your own development system and permissions.
But in my case it was needed. 

Then startup with

```
$ python src/app.py 
```

Test it on browser by:

```
http://localhost:8080
```

Build the image with

```
$ docker build -t %imagename% .
```

Start and rebuild the container and remove it previously with

```
$ docker run -it --rm -p 8090:8080 --name %mycontainername% %imagename%
```


Replace %imagename% and %mycontainername% with your name
Also note that the port here is running on 8090 on the serverhost side
that means you start it in the browser with localhost:8090
and the 8080 is the containers exposed port that is mapped to 8090.

stop with ctrl (cmd) + c 
and as usual always remove containers and image if needed with

```
$ docker ps -a
$ docker rm -r %thecontainerid%
$ docker images
$ docker rmi -f %theimageid%
```

Last you could also use docker-compose.yml file instead

then startup with

```
$ docker-compose up
```

and use -d if you wanna start it in the background.

When stopping, either press ctrl + c or use this in another command windows

```
$ docker-compose down
```

And then use the remove img as above showed

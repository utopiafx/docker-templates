# simple-nginx-alpine-webserver-websocket template

Quick setup for nginx with alpine. And 
in the nginx-template folder it has several options/example of the nginx.conf can be setup into.

** It is build in this order: **
 - /clean
 - /static
 - /socket
 - /https
 - /final

the final is the combinations of them all. But it starts
first with clean, and then goes to the static which describes about the static files root folder
and moves on to the socket (websocket) handling, further when coming to https it 
show how to use SSL Cert and it ends with the final where everything is combinated togheter.

Note that this is not the only configuration you could do there are plenty of them!.
So therefor this list is extended with the follow example

- /headersettings

This folder shows how to use different settings for the header, that is sometimes required.

- /redirect

redirect is describing how direct redirecting from some call to another

And finally this

- /phpfpm

This shows how to use PHP-FPM 


## Instructions


### Using development mode locally 

When developing and testing then startup the nodeserver like

```
$ node server.js
```

And go to browser and type:

```
localhost:8080
```

And when you wanna send message open another browser and enter this

```
http://localhost:8080/api/name/?msg=hello%20there
```

That will trigger a message sent to server that is passing to the other clients that
listen to the socket on eventmessage "message"

### Using Dockerfile instead

If you wanna build an image with Dockerfile then use

```
$ docker build -t %myimage% .
```

And then use this to start an container

```
$ docker run -it --rm -p 8081:8080 --name %mycontainer% %myimage%
```

Replace the %mycontainer% and %myimage% with your suggested name.
Access it in the browser with: 

```
http://localhost:8081/
```

And sending message like

```
http://localhost:8081/api/name/?msg=ddd
```

Here localhost:8081 is mapping against container.ip:8080 

When stopping the server running, type

```
$ docker stop %containerid/containername%
```

Note that %containerid% is found by typing ** docker ps -a ***


### When using docker-compose.yml 

When using the proxy-reverse nginx you will have to use some of those nginx.conf files
in one of those subdirectorys you see here. Simplest is to start with /clean
And that file is also mapped in docker-compose.yml file. 

So when starting this use:

```
$ docker-compose up
```

Then go to browser as usual but use this connection instead:

```
localhost:8082
```

And if sending message use this in another browser

```
localhost:8082/name/?msg=hello
```

### Summary

You see three different ways to start it up. 
But only of those the last step with docker-compose.yml is actually using
the node server combined with nginx proxy reverese server. 

You also specify in docker-compose.yml file, which of the subdirectory's nginx.conf to use!



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

Start with: 

```
docker run --rm -it -p 8080:80 simple-nginx-alpine
```

Access it throw a browser with: localhost:8080 which is mapping against container.ip:80 

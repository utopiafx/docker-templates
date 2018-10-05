# Set nginx base image
FROM nginx:alpine

# File Author / Maintainer
MAINTAINER your name

# Copy the certification from your local to the nginx in the remote
COPY ~/Documents/AppDev/private.key /etc/nginx/ssl/nginx.key
COPY ~/Documents/AppDev/public.crt /etc/nginx/ssl/nginx.crt

# Copy custom configuration file from the current directory
COPY nginx.conf /etc/nginx/nginx.conf

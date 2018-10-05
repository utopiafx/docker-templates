# Set nginx base image
FROM node:alpine

# File Author / Maintainer
MAINTAINER Fredrik Persson

# Install those useful package
RUN apk add --no-cache libc6-compat

# Set environment variable
ENV APPLICATION=/home/server

# change work directory
WORKDIR $APPLICATION

# copy those files from local to container
COPY ./src/package.json	$APPLICATION
COPY ./src/server.js 	$APPLICATION

# install package
RUN npm install

# activate the server
CMD ["node","server.js"]
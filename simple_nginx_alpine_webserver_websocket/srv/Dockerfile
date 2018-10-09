FROM node:alpine

# If using static files than this might be useful
RUN mkdir -p /var/www/html

# And make another one for the server itself
RUN mkdir -p /home/app

# Change workdir
WORKDIR /home/app

# Make a copy of the server to the container
COPY ./src/package.json /home/app
COPY ./src/server.js    /home/app

# Copy over every static files that client would see/use
COPY ./src/public       /var/www/html     

# Install the needed package
RUN npm install --quiet

# Expose a port the node-server is using
EXPOSE 8080

# Start the server up
# depending if it is a node or python or apache or whatever, decide what to write between the [""]
CMD ["node","server.js"]
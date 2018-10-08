FROM nginx:alpine


# If using static files than this might be useful
RUN mkdir -p /var/www/html

WORKDIR /var/www/html

# copy all the files in the src folder to the static root folder for the webserver
COPY ./src /var/www/html

# Expose a port
# EXPOSE 8000

# Start the server up
# depending if it is a node or python or apache or whatever, decide what to write between the [""]
# CMD [""]
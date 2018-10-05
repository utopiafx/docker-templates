# Set nginx as a base-image
FROM nginx:alpine

# File Author / Maintainer
MAINTAINER your name

# copy this file from local to remote container
COPY nginx.conf /etc/nginx/nginx.conf

# set the work directory
#WORKDIR /app

# Expose port 5500
EXPOSE 5500

# Start the nginx
CMD ["nginx", "-g", "daemon off;"]
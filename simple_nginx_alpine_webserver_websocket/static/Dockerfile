FROM nginx:alpine

# RUN rm /etc/nginx/conf.d/default.conf

# Copy the important file from nginx.conf 
COPY nginx.conf    /etc/nginx/nginx.conf

EXPOSE 8087

# Start nginx when the container has provisioned
CMD ["nginx", "-g", "daemon off;"]
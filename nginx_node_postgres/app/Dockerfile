FROM node:alpine

RUN 	mkdir -p /home/app

WORKDIR /home/app

COPY ./package.json .
COPY ./src/server.js .

# RUN npm install -g sequelize && \
#	npm install -g sequelize-cli && \
#	npm install -g pm2 
# 	npm install -g pg

# Install it quitely
# RUN npm install --quiet
RUN npm install

# For end production you rather wanna use this instead of above
# RUN npm install --quiet --prod
# RUN npm install --only=production

# Expose the port 3000 that server use
# EXPOSE 3000

# Start 
CMD ["node","server.js"]


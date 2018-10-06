FROM node:alpine

RUN 	mkdir -p /home/app

ENV APPDIR /home/app

WORKDIR $APPDIR

COPY ./package.json $APPDIR

# RUN npm install -g sequelize && \
#	npm install -g sequelize-cli && \
#	npm install -g pm2 
# 	npm install -g pg

# Install it quitely
# RUN npm install --quiet
RUN npm install

COPY ./src/server.js $APPDIR

# For end production you rather wanna use this instead of above
# RUN npm install --quiet --prod
# RUN npm install --only=production

# Expose the port 3000 that server use
# EXPOSE 3000

# Start 
CMD ["node","server.js"]


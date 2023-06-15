FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
# install dependencies
RUN npm install
COPY . .
# start app
RUN npm run build
EXPOSE 3000
CMD npm run start

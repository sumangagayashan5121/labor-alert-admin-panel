FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "dev"]

# FROM node:10
# RUN npm install -g serve # A simple webserver
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build
# EXPOSE 3000
# CMD ["serve", "-s", "build", "-l", "3000"]
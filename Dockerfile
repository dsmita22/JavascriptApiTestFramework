FROM node:12.8-slim

WORKDIR /app

COPY package.json ./

RUN npm --allow-root install

COPY . ./

RUN npm test




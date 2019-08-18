FROM node:12.8.1-slim

COPY . .
COPY package.json /
COPY package-lock.json /

RUN npm i

CMD ["npm","test"]
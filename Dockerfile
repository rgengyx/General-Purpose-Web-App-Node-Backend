FROM node:8.17

MAINTAINER ricky

WORKDIR ../Node-App-Docker

COPY . ../Node-App-Docker/

RUN npm install

EXPOSE 6000

CMD ["npm", "run", "dev"]

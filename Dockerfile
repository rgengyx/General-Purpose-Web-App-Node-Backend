FROM node:8.9-alpine

MAINTAINER ricky

ADD . /app2/

WORKDIR /app2

RUN npm install

EXPOSE 6000

CMD ["npm", "run", "dev"]

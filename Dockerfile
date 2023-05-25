FROM node:20-alpine3.16

# COPY package.json /film-app/
# COPY src /film-app/
WORKDIR /film-app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]


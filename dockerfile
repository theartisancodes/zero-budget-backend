
FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

RUN npx prisma generate

EXPOSE 4000
CMD npx prisma migrate deploy && yarn start

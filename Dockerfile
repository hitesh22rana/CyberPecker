FROM node:16

WORKDIR /app

COPY ./package.json ./

COPY yarn.lock .

RUN yarn install

COPY . ./

EXPOSE 3000

CMD [ "yarn", "next", "dev" ]
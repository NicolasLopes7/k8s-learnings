FROM node:19-alpine3.15
COPY ./package.json ./package.json
COPY ./src .
RUN yarn
CMD ["yarn", "start"]
FROM node:18-alpine
ARG API_URL=http://numbersapi.com
ENV NUMBERS_API_URL=${API_URL}

WORKDIR /tests

COPY . .

RUN yarn install

ENTRYPOINT [ "yarn", "test" ] 
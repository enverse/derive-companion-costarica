FROM node:latest

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y lsof

RUN npm --silent install --global --depth 0 pnpm

COPY package.json ./
COPY pnpm-lock.yaml ./
COPY ./server.ts ./
COPY ./dist ./dist

RUN pnpm install --prod

CMD ["pnpm", "prod"]
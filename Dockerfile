FROM node:18-alpine

RUN apk add --no-cache libc6-compat
RUN apk update

WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN npm install -g pnpm --force
COPY . .

RUN corepack enable
RUN pnpm install

CMD pnpm run build && pnpm start
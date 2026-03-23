FROM node:20.10.0 AS deps

WORKDIR /usr/src/axies-next

COPY package.json yarn.lock ./
RUN yarn config set registry https://registry.npmjs.org -g \
  && yarn config set network-timeout 600000 -g \
  && yarn install --frozen-lockfile --non-interactive --network-timeout 600000

FROM node:20.10.0 AS builder

WORKDIR /usr/src/axies-next

COPY --from=deps /usr/src/axies-next/node_modules ./node_modules
COPY . .
RUN yarn build

FROM node:20.10.0 AS runner

WORKDIR /usr/src/axies-next

ENV NODE_ENV=production
ENV PORT=4006

COPY package.json yarn.lock ./
COPY --from=deps /usr/src/axies-next/node_modules ./node_modules

COPY --from=builder /usr/src/axies-next/public ./public
COPY --from=builder /usr/src/axies-next/.next ./.next
COPY --from=builder /usr/src/axies-next/next.config.js ./next.config.js

EXPOSE 4006

CMD ["yarn", "start"]

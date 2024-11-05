FROM node:22-alpine AS base
WORKDIR /usr/src/app

FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json /temp/dev
RUN cd /temp/dev && npm install

FROM base AS build
COPY --from=install /temp/dev/node_modules node_modules
COPY . .
ENV NODE_ENV=production
RUN npx svelte-kit sync
RUN npm run build

FROM base AS server
USER node
COPY --from=build /usr/src/app/build/ .
EXPOSE 3000/tcp
CMD ["node", "index.js"]

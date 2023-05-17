
#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install --production
RUN npm run build:ssr
CMD ["node", "dist/ang2-conduit/server/main.js"]
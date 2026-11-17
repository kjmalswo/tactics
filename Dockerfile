FROM node:24-alpine
WORKDIR /app
COPY package.json game-db.js rpg-growth.js rpg-engine.js index.html ./
COPY server ./server
ENV NODE_ENV=production PORT=8080 DATA_DIR=/data
RUN mkdir -p /data && chown node:node /data
USER node
VOLUME ["/data"]
EXPOSE 8080
CMD ["node", "server/main.cjs"]

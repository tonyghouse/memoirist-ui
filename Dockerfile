FROM node:18-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY package.json .

RUN npm clean --force

RUN npm install -g typescript

RUN npm install --legacy-peer-deps

RUN npm run build

COPY . .

EXPOSE 8080
# required for docker desktop port mapping

CMD ["npm", "start"]
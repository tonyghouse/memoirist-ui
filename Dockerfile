FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 0.0.0.0:8080
# required for docker desktop port mapping

CMD ["npm", "start"]
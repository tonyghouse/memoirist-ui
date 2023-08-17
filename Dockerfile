FROM node:18.16-alpine

# ENV NODE_ENV=production

WORKDIR /app

# COPY package.json .
# COPY package.json /app/package.json
# COPY package-lock.json /app/package-lock.json
COPY . /app

RUN rm -rf node_modules

RUN npm install -g typescript

RUN npm install --legacy-peer-deps

RUN npm run build

COPY . .

EXPOSE 8080
# required for docker desktop port mapping

CMD ["npm", "start"]
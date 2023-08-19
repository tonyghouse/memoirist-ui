FROM node:18.16-alpine


WORKDIR /app

COPY . /app

RUN rm -rf node_modules

RUN npm install -g typescript

RUN npm install --legacy-peer-deps

RUN npm run build

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
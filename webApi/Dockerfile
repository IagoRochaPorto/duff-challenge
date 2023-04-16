FROM node:19

WORKDIR /usr/src/webapi

COPY package*.json ./

COPY tsconfig.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8081

CMD ["node", "bin/main/app.js"]
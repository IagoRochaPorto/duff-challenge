FROM node:19

WORKDIR /usr/src/beer

COPY package*.json ./

COPY tsconfig.json ./

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

EXPOSE 8080

CMD ["node", "bin/main/app.js"]
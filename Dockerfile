FROM node:20-alpine

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install --frozen-lockfile

COPY prisma/schema.prisma ./prisma/
RUN npx prisma generate

COPY . .

EXPOSE 8080
CMD [ "npm", "run", "dev" ]
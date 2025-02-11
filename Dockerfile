FROM node:20-alpine
RUN apk add --no-cache openssl

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY prisma/schema.prisma ./prisma/
RUN npx prisma generate

COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
FROM node:20-alpine
RUN npm install -g --unsafe-perm prisma

RUN mkdir /app
WORKDIR /app

COPY ./* ./prisma/

RUN npm init -y
RUN npm install @prisma/photon
RUN npx prisma generate

CMD [ "prisma", "studio" ]

EXPOSE 5555/tcp
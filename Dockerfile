
# Etapa 1: Compilar a aplicação
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY tsconfig.json ./
COPY src ./src

RUN npm run check
RUN npm run build

# Etapa 2: Executar a aplicação
FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./

RUN npm install --omit=dev

COPY --from=build /app/dist ./dist

EXPOSE 80

CMD ["npm", "start"]

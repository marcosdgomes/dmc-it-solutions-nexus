# Estágio Base
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./

# Estágio de Dependências e Desenvolvimento
FROM base AS dev
RUN npm install
COPY . .
# Expor porta padrão do Vite (ajustado conforme vite.config.ts)
EXPOSE 8080
# Rodar em modo host para acesso externo ao container
CMD ["npm", "run", "dev", "--", "--host"]

# Estágio de Build (Para testes de produção local)
FROM base AS build
RUN npm install
COPY . .
RUN npm run build

# Estágio de Produção (Servidor Nginx)
FROM nginx:alpine AS prod
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Imagem de Origem
FROM node:13-alpine

ARG NODE_COMMAND

# Diretório de trabalho(é onde a aplicação ficará dentro do container).
ADD frontend/ /app
WORKDIR /app

# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Instalando dependências da aplicação e armazenando em cache.
RUN npm install --silent

# Inicializa a aplicação
CMD npm run $NODE_COMMAND

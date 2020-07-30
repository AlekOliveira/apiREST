# O que é uma apiREST?
Uma api rest tem como objetivo fornecer uma maior flexibilidade ao front end para o tratamento de dados, de forma que uma única api possa atender diferentes plataformas, assim permitindo que a construção de um único backend implementado com NodeJS possa servir para inúmeros projetos nas mais variadas linguagens ou simplesmente apenas para consulta de informações.

# Qual o motivo de usar Node neste projeto?
O nodeJS se trata de uma plataforma na qual permite o uso de Javascript para aplicações backend para efetuar requisições ou obter respostas de um servidor, assim como o acesso à bancos de dados e etc.

# Algumas bibliotecas e ferramentas utilizadas no desenvolvimento do projeto
- Mongoose
- Express
- Nodemon
- Docker 
- MongoDB
- Imsomnia

# Como inicializar
- Faça um clone do repositório e abra o terminal no diretório da pasta do projeto.
- Instale as dependências com o comando 'npm install'.
- Instale o [Docker](https://www.docker.com)
- Agora com o docker instalado, no terminal digite 'docker pull mongo'. Assim um container do mongoDB será instalado.
- Para inicializar o mongo, você deve redirecionar as portas através do comando 'docker run --name mongodb -p 27017:27017 -d mongo'
- Use o comando 'docker ps -a' para verificar se o mongo está rodando, caso não esteja basta digitar 'docker start <nomeDaImagem>'











const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//init do app
const app = express();
app.use(express.json());

//init do banco de dados
mongoose.connect(
  'mongodb://localhost:27017/nodeapi',
  { useNewUrlParser: true }
);
requireDir('./src/models');



//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);





//nodemon
//docker - para containerização dos recursos do mongo db
//robo3t - interface para o mongodb


/****dependencias utilizadas/
/*npm install mongoose - se trata de um ORM de bancos relacionais
para mongoDB, assim encapsulando a lógica das querys SQL's,
assim permitindo a execução dos códigos através do javascript
através da metodologia de Object Relational Mapping

node
node demon
express

os registros foram criados pelo inSominia


*/








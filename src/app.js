const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//carregar as rotas
const indexRotas = require('./routes/index.rotas');
const produtosRotas = require('./routes/produtos.rotas');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', indexRotas);
app.use('/produtos', produtosRotas);


module.exports = app;
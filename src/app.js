'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// conectar ao banco
mongoose.connect('mongodb+srv://junior-user:dev123789456@cluster0-amj1o.gcp.mongodb.net/test?retryWrites=true&w=majority');

// carregar models
const Produtos = require('./models/produto');

// carregar as rotas
const indexRotas = require('./routes/index.rotas');
const produtosRotas = require('./routes/produtos-rotas');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', indexRotas);
app.use('/produtos', produtosRotas);


module.exports = app;
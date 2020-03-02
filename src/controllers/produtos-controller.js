'use strict'

const mongoose = require('mongoose');
const Produto  = mongoose.model('Produto');

exports.post = ('/', (req, res, next) => {
    var produto = new Produto(req.body);
    produto.save()
    .then(x => {
        res.status(201).send({message: 'Produto Cadastrado com sucesso'});
    })
    .catch(e => {
        res.status(400).send({message: 'Falha ao cadastrar produto', data: e});
    });
    
});

exports.put = ('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
});

exports.delete = ('/', (req, res, next) => {
    res.status(201).send(req.body);
});
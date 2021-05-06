var express = require('express');
var http = require('http');
var app = express();

app.get('/', (req, res) => {
    res.status(200).send(" Bem-vindo ao API REST ");
});

app.post('/', (req, res) => {
    res.status(200).send(" Você acessou via POST ");
});

http.createServer(app).listen(8001, () => {
    console.log('Servidor inicido em http://localhost:8001');
});

var listaPessoas = ["Júlia", "Adalto", "João"];

app.get('/pessoas', (req, res) => {
    res.status(200).send(listaPessoas);
});

app.post('/pessoas', (req, res) => {
    nome = "Nome" + listaPessoas.length;
    listaPessoas.push(nome);
    res.status(200).send(nome + " adicionado!");
});
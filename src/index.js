const express = require('express');
const app = express();
const path = require ('path');
const port = 3000;
var cors = require('cors')

app.listen(port, () => {
    console.log("Puerto en ejecucion",app.get(port));
});

app.use(cors())

app.get('/sum/:valor1/:valor2', (req, res) => {
    res.json(parseInt(req.params.valor1) + parseInt(req.params.valor2))
})
app.get('/res/:valor1/:valor2', (req, res) => {
    res.json(parseInt(req.params.valor1) - parseInt(req.params.valor2))
})
app.get('/mult/:valor1/:valor2', (req, res) => {
    res.json(parseInt(req.params.valor1) * parseInt(req.params.valor2))
})
app.get('/div/:valor1/:valor2', (req, res) => {
    res.json(parseInt(req.params.valor1) / parseInt(req.params.valor2))
})
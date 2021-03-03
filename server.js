const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

//Iniciando o app
const app = express()
app.use(express.json())

//Iniciando e criando o BD
mongoose.connect('mongodb://localhost:27017/swords',
{ useNewUrlParser: true, useUnifiedTopology: true })

requireDir('./src/models')

//ROTAS
app.use("/api", require("./src/routes"))

app.listen(3002)
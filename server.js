const express = require('express')
const http = require('http')
const status = require('http-status')
const openBankingRoute = require('./routes/open-banking-router')

const app = express()

app.use(function (req, res, next) {
  
  //habilitando cors
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(express.json())

//adicionando a roda dos serviços em /open-banking
app.use('/open-banking', openBankingRoute)

//rotas não encontradas, responde com 404
app.use((request, response, next) => {
  response.status(status.NOT_FOUND).send()
})

//erros 500 respondem com um json padrão de erro
app.use((error, request, response, next) => {
  response.status(status.INTERNAL_SERVER_ERROR).json({ error })
})

//Porta do Serviço
const port = 3001;

app.set('port', port)
const server = http.createServer(app)

server.listen(port)
console.log('server run on port:' + port);
//const moduloA = require('../../moduloA')
//const moduloNome = require('../moduloNome')
//const moduloA = require('./1 moduloA')
//const moduloNome = require('./pastaA/moduloNome')

const produtos = require('./8 alunosJson')

const http = require('http')
http.createServer((req,res) => {
    res.write(produtos.alunosJson)
    res.end()
}).listen(8080)

const url2 = 'http://localhost:8080/'
const axios = require('axios')

axios.get(url2).then(response => {
    const alunos = response.data
    console.log(alunos)
})



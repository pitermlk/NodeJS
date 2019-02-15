const moduloA = require('../../1 moduleExports')
const moduloNome = require('../moduloNome')

console.log(moduloA.bemVindo)
console.log(moduloNome.nome)

const http = require('http')
http.createServer((req,res) => {
    res.write(moduloA.bemVindo)
    res.write(moduloNome.nome)
    res.end()
}).listen(8080)

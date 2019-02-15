const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('../node_modules/axios')

// FUNÇÕES CALLBACKS 
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (fun, funAtual) => {
    return fun.salario < funAtual.salario ? fun : funAtual // OPERADOR TERNARIO 
}

axios.get(url,{
    proxy : {
        host:'proxylatam.indra.es',
        port:8080,
        auth: {
            username:'placerda',
            password:'Javascript@2018'
        }
    }
}
).then(response => {
    const funcionarios = response.data
    fun = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)
    console.log(fun)
    
})










    
    

    


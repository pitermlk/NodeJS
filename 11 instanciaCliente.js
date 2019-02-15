const contadorA = require ('./9 instanciaUnica')
const contadorB = require ('./9 instanciaUnica')

const contadorC = require ('./10 instanciaNova')()
const contadorD = require ('./10 instanciaNova')()


contadorA.inc()
contadorB.inc()

console.log(contadorB.valor)

contadorC.inc()
contadorD.inc()



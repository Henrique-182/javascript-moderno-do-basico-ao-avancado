const contadorA = require('./instancia-unica')
const contadorB = require('./instancia-unica')
const contadorC = require('./instancia-nova')()
const contadorD = require('./instancia-nova')()

contadorA.inc()
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)

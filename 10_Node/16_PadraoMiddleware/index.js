// Middleware pattern (chain of responsability)

const { constant } = require("lodash")

const passo1 = (contexto, proximo) => {
    contexto.valor1 = 'mid1'
    proximo()
}

const passo2 = (contexto, proximo) => {
    contexto.valor2 = 'mid2'
    proximo()
}

const passo3 = contexto => contexto.valor3 = 'mid3'

const exec = (contexto, ...middlewares) => {
    const execPasso = indice => {
        middlewares 
        && indice <= middlewares.length 
        && middlewares[indice] (contexto, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const contexto = {}
exec(contexto, passo2, passo1, passo3)
console.log(contexto)

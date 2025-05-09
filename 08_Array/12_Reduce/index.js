const alunos = [
    { nome: 'João', nota: 7.3, bolsista: true },
    { nome: 'Maria', nota: 9.2, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Todos são bolsistas

let resultado = alunos.reduce(function (acumulador, atual) {
    if (atual.bolsista && acumulador) {
        acumulador = true
    } else {
        acumulador = false
    }

    return acumulador
}, true)
// const todosSaoBolsistas = (acumulador, atual) => resultado && bolsista
// resultado = alunos.map(a => a.bolsista).reduce(todosSaoBolsistas)
console.log(`Todos bolsistas? ${resultado}`)

// Alguem é bolsista
resultado = alunos.reduce(function (acumulador, atual) {
    if (atual.bolsista) {
        acumulador = true
    }

    return acumulador
}, false)
// const alguemBolsista = (acumulador, atual) => acumulador || atual
// resultado = alunos.map(a => a.bolsista).reduce(alguemBolsista)
console.log(`Alguém é bolsista? ${resultado}`)

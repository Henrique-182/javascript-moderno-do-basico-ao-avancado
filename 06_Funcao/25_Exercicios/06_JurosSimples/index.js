function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    let juros = capitalInicial * taxaJuros * tempoAplicacao

    return `Capital inicial: R$${capitalInicial}\nJuros: R$${juros}\nMontante: R$${capitalInicial + juros}`
}

console.log(jurosSimples(5000, 0.2, 3))

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
    let juros = capitalInicial * (1 + taxaJuros) ** tempoAplicacao

    return `Capital inicial: R$${capitalInicial}\nJuros: R$${juros}\nMontante: R$${capitalInicial + juros}`
}

console.log(jurosCompostos(5000, 0.2, 3))

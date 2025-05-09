const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice, array) {
    console.log(`${indice} - ${nome}`)
    console.log(array)
})

// aprovados.forEach(nome => console.log(nome))

const exibirAprovado = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovado)

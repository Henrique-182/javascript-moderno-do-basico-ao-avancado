function objetoParaArray(objetoOriginal) {
    let array = []

    for (x in objetoOriginal) {
        let chave = x
        let valor = objetoOriginal[x]

        array.push([chave, valor])
    }

    return array
}

let objeto = {
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}

const resultado = objetoParaArray(objeto)

console.log(x, resultado[x])

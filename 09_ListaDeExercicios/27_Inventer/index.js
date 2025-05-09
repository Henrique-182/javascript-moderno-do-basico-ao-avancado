function inverter(objetoOriginal) {
    let novoObjeto = {}

    for (x in objetoOriginal) {
        let chave = x
        let valor = objetoOriginal[x]
        novoObjeto[valor] = chave
    }

    return novoObjeto
}

let objeto = {
    a: 1,
    b: 2,
    c: 3
}

const resultado = inverter(objeto)

console.log(resultado)
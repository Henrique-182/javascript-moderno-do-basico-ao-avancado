function removerPropriedade(objetoOriginal, elementoASerRemovido) {
    novoObjeto = {}

    for (i in objetoOriginal) {

        if (i != elementoASerRemovido) {
            novoObjeto[i] = objetoOriginal[i]
        }

    }

    return novoObjeto
}

let objeto = {id: 20, nome: "caneta", descricao: "não preenchido"}

const resultado = removerPropriedade(objeto, "descricao")

console.log("Mesmo objeto? " + Object.is(resultado, objeto))
console.log(resultado)

function removerVogais(texto) {
    return texto.replace('a', '')
    .replace('e', '')
    .replace('i', '')
    .replace('o', '')
    .replace('u', '')
}

const texto = 'Fundamentos'

const resultado = removerVogais(texto)

console.log(resultado)
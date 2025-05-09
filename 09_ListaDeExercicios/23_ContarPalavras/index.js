function contarPalavras(frase) {
    let array = []

    array = frase.split(' ')

    return array.length
}

let frase = 'Me divirto aprendendo a programar'

const resultado = contarPalavras(frase)

console.log(resultado)
function contarCaractere(caractere, texto) {
    let contador = 0

    for (let i = 0; i < texto.length; i++) {
        if(texto[i] == caractere) contador++
    }

    return contador
}

let caractere = 'c'
let frase = 'Conhece-te a ti mesmo'

const resultado = contarCaractere(caractere, frase)

console.log(resultado)
function buscarPalavrasSemelhantes(palavra, arrayOriginal) {
    let novoArray = []

    for (i in arrayOriginal) {
        let palavraArray = arrayOriginal[i]
        if (palavraArray.includes(palavra)) {
            novoArray.push(palavraArray)
        }
    }

    return novoArray
}

const palavra = 'pro'
const array = ['programação', 'mobile', 'profissional']

const resultado = buscarPalavrasSemelhantes(palavra, array)

console.log(resultado)

function receberPrimeiroEUltimoElemento(arrayOriginal) {
    let novoArray = []

    novoArray.push(arrayOriginal[0])
    novoArray.push(arrayOriginal[arrayOriginal.length - 1])

    return novoArray
}

const resultado = receberPrimeiroEUltimoElemento([-100, "aplicativo", 16])

console.log(resultado)

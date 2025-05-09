function maiorOuIgual(primeiroNumero, segundoNumero) {
    const primeiroEInteiro = Number.isInteger(primeiroNumero)
    const segundoEInteiro = Number.isInteger(segundoNumero)
    const primeiroEMaior = primeiroNumero >= segundoNumero

    return primeiroEInteiro && segundoEInteiro && primeiroEMaior
}

const resultado = maiorOuIgual(5, 1);

console.log(resultado)

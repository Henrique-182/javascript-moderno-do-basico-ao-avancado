function repetir(elementoRepetido, vezes) {
    let array = []

    for (vezes; vezes > 0; vezes--) {
        array.push(elementoRepetido)
    } 

    return array
}

const resultado = repetir(2, 5)

console.log(resultado)

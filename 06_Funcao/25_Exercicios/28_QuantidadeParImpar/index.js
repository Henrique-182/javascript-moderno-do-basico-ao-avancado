function quantidadeParImpar(array) {
    let quantidadePar = 0
    let quantidadeImpar = 0

    for (i in array) {
        let numero = array[i]
        if (numero % 2 == 0) {
            quantidadePar++
        } else {
            quantidadeImpar++
        }
    }

    console.log(`Par ${quantidadePar} - Ímpar ${quantidadeImpar}`)
}

quantidadeParImpar([1, 2, 3, 4, 5])

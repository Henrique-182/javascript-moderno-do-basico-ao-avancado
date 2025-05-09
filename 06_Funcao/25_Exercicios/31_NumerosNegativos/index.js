function numerosNegativos(array) {
    let qtdeNegativos = 0

    for (i in array) {
        let numero = array[i]
        if (numero < 0) {
            qtdeNegativos++
        }
    }

    console.log(`Há ${qtdeNegativos} número(s) negativos`)
}

numerosNegativos([1, 5, -1, -0.5, 1000, -12])
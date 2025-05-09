function maiorMenor(array) {
    let maior = 0
    let menor = 0

    for (i in array) {
        let numero = array[i]
        if (i == 1) {
            maior = numero
            menor = numero
        } else {
            if (numero > maior) {
                maior = numero
            }
            if (numero < menor) {
                menor = numero
            }
        }
    }

    console.log(`Maior ${maior} - Menor ${menor}`)
}

maiorMenor([5, 8, 4, 10, 3, 25])

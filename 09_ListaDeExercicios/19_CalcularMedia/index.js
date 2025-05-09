function calcularMedia(arrayOriginal) {

    let soma = 0
    let qtde = arrayOriginal.length

    for (i in arrayOriginal) {
        soma += arrayOriginal[i]
    }

    return soma / qtde
}

let array = [1, 2, 3, 4, 5]
const resultado = calcularMedia(array)

console.log(resultado)

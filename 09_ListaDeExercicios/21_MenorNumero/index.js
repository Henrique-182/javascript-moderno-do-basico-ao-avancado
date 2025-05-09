function menorNumero(arrayOriginal) {

    let menor

    for (i in arrayOriginal) {
        if (i == 0) {
            menor = arrayOriginal[i]
        } 

        if (arrayOriginal[i] < menor) {
            menor = arrayOriginal[i]
        }
    }

    return menor
}

let array = [5, -15, 50, 3]
const resultado = menorNumero(array)

console.log(resultado)

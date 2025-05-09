function somarNumeros(array) {
    let total = 0

    for (x in array) {
        total += array[x]
    }

    return total
}

let array = [15, 15, 15, 15]
const resultado = somarNumeros(array)

console.log(resultado)

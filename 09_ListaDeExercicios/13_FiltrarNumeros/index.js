function filtrarNumeros(arrayOriginal) {
    let novoArray = []

    for (i in arrayOriginal) {

        let eUmNumero = !isNaN(arrayOriginal[i])
        let naoEUmaString = typeof arrayOriginal[i] != 'string'
            
        if (eUmNumero && naoEUmaString) {
            novoArray.push(arrayOriginal[i])
        }
    }

    return novoArray
}

let array = ["JavaScript", 1, "3", "Web", 20]
//let array = ["a", "c"]

const resultado = filtrarNumeros(array)

console.log(resultado)

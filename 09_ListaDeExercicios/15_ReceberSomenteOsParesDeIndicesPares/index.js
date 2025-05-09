function receberSomenteOsParesDeIndicesPares(arrayOriginal) {

    let novoArray = []

    for (i in arrayOriginal) {
        let eIndicePar = i % 2 == 0
        let eNumeroPar = arrayOriginal[i] % 2 == 0

        if (eIndicePar && eNumeroPar) {
            novoArray.push(arrayOriginal[i])
        }
        
    }

    return novoArray
}

let array = [10, 70, 22, 43]
const resultado = receberSomenteOsParesDeIndicesPares(array)

console.log(resultado)

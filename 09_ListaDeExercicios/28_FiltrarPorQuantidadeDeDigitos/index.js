function filtrarPorQuantidadeDeDigitos(arrayOriginal, qtde) {
    let array = []

    for (let i in arrayOriginal) {
        let elemento = arrayOriginal[i]
        
        if (elemento.toString().split("").length == qtde) {
            array.push(elemento)
        }
    }

    return array
}

let qtde = 1
let array = [5, 9, 1, 125, 11]

const resultado = filtrarPorQuantidadeDeDigitos(array, qtde)

console.log(resultado)
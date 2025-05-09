function despesasTotais(arrayOriginal) {
    let total = 0

    for (i in arrayOriginal) {
        let produto = arrayOriginal[i]
        
        for (j in produto) {

            if (j == 'preco') {
                total += produto[j]
            }
        }
    }

    return total
}

let array = [
    {nome: "Jornal", categoria: "Informação", preco: 3599.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 30999.90}
]
const resultado = despesasTotais(array)

console.log(resultado)

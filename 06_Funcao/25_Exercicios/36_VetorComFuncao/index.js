let elemento = 10

function f1(vetor, numero) {
    let novoVetor = []

    for (i in vetor) {
        novoVetor.push(vetor[i] * numero)
    }

    return novoVetor
}

function f2(vetor, numero) {
    let novoVetor = []

    for (i in vetor) {
        novoVetor.push(vetor[i] * numero)
    }

    return novoVetor
}


console.log(f1([1, 2, 3], elemento))
if (elemento == 5) console.log(f2([3, 2, 1], elemento))

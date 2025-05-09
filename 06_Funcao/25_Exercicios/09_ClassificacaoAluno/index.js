function classificacaoAluno(nota) {
    if (nota < 38) {
        return `Reprovado com nota ${nota}`
    }

    let proximoMultiploDeCinco = nota
    while (proximoMultiploDeCinco % 5 != 0) {
        proximoMultiploDeCinco++
    }
    
    if (proximoMultiploDeCinco - nota < 3) {
        nota = proximoMultiploDeCinco
        return `Aprovado com nota ${nota}`
    }

    return `Aprovado com nota ${nota}`
}

console.log(classificacaoAluno(100))
console.log(classificacaoAluno(30))
console.log(classificacaoAluno(38))
console.log(classificacaoAluno(88))
console.log(classificacaoAluno(61))

function avaliaPontuacao(pontuacoes) {
    let arrayPontuacoes = pontuacoes.split(", ")
    let maiorPontuacao = 0
    let menorPontuacao = 0
    let vezesBateuRecorde = 0
    let numeroPartidaMenorPontuacao = 1
    let i = 1

    for (p in arrayPontuacoes) {
        pontuacaoAtual = arrayPontuacoes[p]

        if (i == 1) {
            maiorPontuacao = pontuacaoAtual
            menorPontuacao = pontuacaoAtual
        } else {
            if (pontuacaoAtual >= maiorPontuacao) {
                maiorPontuacao = pontuacaoAtual
                vezesBateuRecorde++
            }

            if (pontuacaoAtual < menorPontuacao) {
                menorPontuacao = pontuacaoAtual
                numeroPartidaMenorPontuacao = i
            }
        }
        i++
    }

    return [vezesBateuRecorde, numeroPartidaMenorPontuacao]
}

console.log(avaliaPontuacao("30, 40, 20, 4, 51, 25, 42, 38, 56, 0"))
console.log(avaliaPontuacao("10, 20, 20, 8, 25, 3, 0, 30, 1"))
function receberMelhorEstudante(objetoAlunos) {
    let melhorAluno = { nome: '', media: 0}
    
    for (let i in objetoAlunos) {
        let chave = i
        let valor = objetoAlunos[i]

        let soma = 0
        for (j in valor) {
            soma += valor[j]
        }

        let media = soma / valor.length

        if (media > melhorAluno.media) {
            melhorAluno.nome = chave
            melhorAluno.media = media
        }
    }

    return melhorAluno
}

let objeto = {
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}

const resultado = receberMelhorEstudante(objeto)

console.log(resultado)
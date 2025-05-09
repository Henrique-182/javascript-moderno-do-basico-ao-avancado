function mediaAluno(codigoAluno, arrayNotas) {
    let n1 = arrayNotas[0]
    let n2 = arrayNotas[1]
    let n3 = arrayNotas[2]
    let pesoN1 = 3
    let pesoN2 = 3
    let pesoN3 = 3
    let media = 0

    if (n1 >= n2 && n1 >= n3) {
        pesoN1 = 4
    } else if (n2 >= n1 && n2 >= n3) {
        pesoN2 = 4
    } else if (n3 >= n1 && n3 >= n2) {
        pesoN3 = 4
    }

    media = ((n1 * pesoN1) + (n2 * pesoN2) + (n3 * pesoN3)) / (pesoN1 + pesoN2 + pesoN3)

    console.log(`O aluno de código ${codigoAluno}`)
    console.log(`Teve a média de ${media}`)
}

mediaAluno("12345", [8, 8, 8])

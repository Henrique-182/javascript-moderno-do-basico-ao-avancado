function planoDeSaude(idade) {
    let valorPlano = 100

    if (idade < 10) {
        return valorPlano + 80
    } else if (idade < 30) {
        return valorPlano + 50
    } else if (idade < 60) {
        return valorPlano + 95
    }
    return valorPlano + 130
}

console.log(planoDeSaude(65))
console.log(planoDeSaude(10))

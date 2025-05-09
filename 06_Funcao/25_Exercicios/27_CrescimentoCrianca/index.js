function crescimentoCrianca(arrayPrimeiraCrianca, arraySegundaCrianca) {
    let alturaAtualPrimeiraCrianca = arrayPrimeiraCrianca[0]
    let crescimentoAnualPrimeiraCrianca = arrayPrimeiraCrianca[1]
    let alturaAtualSegundaCrianca = arraySegundaCrianca[0]
    let crescimentoAnualSegundaCrianca = arraySegundaCrianca[1]

    if (alturaAtualPrimeiraCrianca != alturaAtualSegundaCrianca) {
        if (alturaAtualPrimeiraCrianca > alturaAtualSegundaCrianca) {
            if (crescimentoAnualSegundaCrianca > crescimentoAnualPrimeiraCrianca) {
                let anos = 0
        
                while (alturaAtualPrimeiraCrianca > alturaAtualSegundaCrianca) {
                    alturaAtualPrimeiraCrianca += crescimentoAnualPrimeiraCrianca
                    alturaAtualSegundaCrianca += crescimentoAnualSegundaCrianca
                    anos++
                }
                return `A primeira será maior do que a segunda em ${anos} anos`
            } else {
                return `As crianças não possuem a mesma altura e não podem ser ultrapassadas`
            }
        } else {
            if (crescimentoAnualPrimeiraCrianca > crescimentoAnualSegundaCrianca) {
                let anos = 0

                while (alturaAtualSegundaCrianca > alturaAtualPrimeiraCrianca) {
                    alturaAtualPrimeiraCrianca += crescimentoAnualPrimeiraCrianca
                    alturaAtualSegundaCrianca += crescimentoAnualSegundaCrianca
                    anos++
                }
                return `A segunda será maior do que a primeira em ${anos} anos`
            } else {
                return `As crianças não possuem a mesma altura e não podem ser ultrapassadas`
            }
        }
    }

    return "Crianças possuem a mesma altura"

}

console.log(crescimentoCrianca([170, 3], [160, 2]))

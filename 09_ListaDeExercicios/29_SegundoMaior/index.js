function segundoMaior(arrayOriginal) {
    let maior = 0
    let segundoMaior = 0

    for (let i = 0; i < arrayOriginal.length; i++) {
        let elemento = arrayOriginal[i]

        if (i == 0) {
            maior = elemento
            segundoMaior = elemento
        } else if (i == 1) {
            if (elemento > maior) {
                maior = elemento
            } else {
                segundoMaior = elemento
            }
        } else {
            if (elemento > segundoMaior) {
                if (elemento > maior) {
                    segundoMaior = maior
                    maior = elemento
                } else {
                    
                    segundoMaior = elemento
                }
            }
        }
    }

    return segundoMaior
}

let array = [8, 4, 5, 6]

const resultado = segundoMaior(array)

console.log(resultado)

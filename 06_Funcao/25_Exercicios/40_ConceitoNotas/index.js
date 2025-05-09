function conceitos(arrayNotas) {

    for (i in arrayNotas) {
        let nota = arrayNotas[i]
        let conceito = ""
        if (nota >= 0.0 && nota <= 4.9) {
            conceito = "D"
        } else if (nota >= 5.0 && nota <= 6.9) {
            conceito = "C"
        } else if (nota >= 7.0 && nota <= 8.9) {
            conceito = "B"
        } else if (nota >= 9.0 && nota <= 10) {
            conceito = "A"
        } else {
            conceito = "DESCONHECIDO"
        }

        console.log(`${parseInt(i)+1}ª nota (${nota}) - Conceito ${conceito} `)
    }

}

conceitos([1, 5, 10.5, 6.5, 7.9, 1.4])
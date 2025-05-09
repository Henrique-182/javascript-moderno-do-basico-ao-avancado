function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log("Aprovado com " + nota)
    }
}

soBoaNoticia(8.5)
soBoaNoticia(6.5)

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log("É verdade... " + valor)
    }
}

seForVerdadeEuFalo(3 > 2)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(" ")
seForVerdadeEuFalo()

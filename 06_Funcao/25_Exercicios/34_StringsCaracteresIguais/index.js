function caracteresIguais(texto1, texto2) {
    let arrayLetrasDiferentesTexto1 = []
    let arrayLetrasDiferentesTexto2 = []

    for (let i = 0; i < texto1.length; i++) {
        let letraTexto1 = texto1[i]
        if (!arrayLetrasDiferentesTexto1.includes(letraTexto1)) {
            arrayLetrasDiferentesTexto1.push(letraTexto1)
        }
    }

    for (let j = 0; j < texto2.length; j++) {
        let letraTexto2 = texto2[j]
        if (!arrayLetrasDiferentesTexto2.includes(letraTexto2)) [
            arrayLetrasDiferentesTexto2.push(letraTexto2)
        ]
    }

    let tamanhoArray1 = arrayLetrasDiferentesTexto1.length
    let contador = 0
    
    for (let k = 0; k < tamanhoArray1; k++) {
        let letraTexto1 = arrayLetrasDiferentesTexto1[k]
        if (arrayLetrasDiferentesTexto2.includes(letraTexto1)) {
            contador++
        }
    }

    if (tamanhoArray1 == contador) {
        return "String são iguais"
    } else {
        return "String não são iguais"
    }
    
}   

console.log(caracteresIguais("abe", "abe"))

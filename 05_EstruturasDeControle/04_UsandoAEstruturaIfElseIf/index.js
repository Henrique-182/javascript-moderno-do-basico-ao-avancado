const imprimirResultado = function(nota) {
    if (nota >= 9 && nota <= 10) {
        console.log("Quadro de honra")
    } else if (nota >= 7 && nota <= 8.99) {
        console.log("Aprovado")
    } else if (nota >= 4 && nota <= 6.99) {
        console.log("Recuperacao")
    } else if (nota >= 0 && nota <= 3.99) {
        console.log("Reprovado")
    } else {
        console.log("Nota inválida")
    }
}

imprimirResultado(5)
imprimirResultado("texto")

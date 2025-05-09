function simboloMais(vezes) {
    let texto = "";
    for (vezes; vezes > 0; vezes--) {
        texto += "+"
    }

    return texto
}

const resultado = simboloMais(2)

console.log(resultado)

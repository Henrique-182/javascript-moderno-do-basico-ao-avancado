function inverso(valor) {
    if (valor == true || valor == false) return !valor

    if (Number.isInteger(valor)) return valor * (-1)

    return "Booleano ou número esperado, mas o parâmetro é do tipo string"
}

const resultado = inverso(2000)

console.log(resultado)

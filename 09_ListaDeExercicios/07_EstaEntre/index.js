function estaEntre(numero, minimo, maximo, inclusivo) {
    if (inclusivo == true)  return numero >= minimo && numero <= maximo

    return numero > numero && numero < maximo 
}

const resultado = estaEntre(3, 3, 150)

console.log(resultado)

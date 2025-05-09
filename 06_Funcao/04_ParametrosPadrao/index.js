// Estratégia 1 para gerar valor padrão
function soma(x, y, z) {
    x = x || 0
    y = y || 0
    z = z || 0
    return x + y + z
}
console.log(soma())
console.log(soma(1, 2))
console.log(soma(1, 2, 3))

// Estratégia 2, 3 e 4 para gerar valor padrão
function soma2(x, y, z) {
    x = x !== undefined ? x : 0
    y = 1 in arguments ? y : 0
    z = isNaN(z) ? 0 : z
    return x + y + z
}
console.log(soma2())
console.log(soma2(1, 2))
console.log(soma2(1, 2, 3))

// Valor padrão do ES2015
function soma3(x = 0, y = 0, z = 0) {
    return x + y + z
}
console.log(soma3())
console.log(soma3(1, 2))
console.log(soma3(1, 2, 3))

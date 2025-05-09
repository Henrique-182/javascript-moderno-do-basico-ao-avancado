// Arrow Function
const soma = (x, y) => {
    return x + y
}
console.log(soma(1, 5))

const quadrado = x => x ** 2
console.log(quadrado(5))

// Arrow Function (this)
const lexico1 = () => console.log(`This dentro da função: ${this === exports}`)
lexico1()

// Parâmetro default
function log(texto = 'Node') {
    console.log(texto)
}
log()

// Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n) 

    return total
}
console.log(total(1, 2, 4, 5))

function calculadora(x, operacao, y) {
    switch (operacao) {
        case "+":
            return x + y
        case "-":
            return x - y
        case "*":
            return x * y
        case "/":
            return x / y
        default:
            return "Operação inválida"
    }
}

console.log(calculadora(5, "+", 5))
console.log(calculadora(5, "-", 5))
console.log(calculadora(5, "*", 5))
console.log(calculadora(5, "/", 5))
console.log(calculadora(5, "x", 5))

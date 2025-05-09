const soma = function(x, y) {
    return x + y;
}

const imprimirResultado = function(x, y, operacao = soma) {
    console.log(operacao(x, y))
}

imprimirResultado(1, 4, soma)
imprimirResultado(1, 5)
imprimirResultado(1, 5, (x, y) => x - y)
imprimirResultado(1, 5, (x, y) => x * y)
imprimirResultado(1, 5, (x, y) => x / y)

const pessoa = {
    falar: function () {
        console.log("Olá")
    }
}

pessoa.falar()

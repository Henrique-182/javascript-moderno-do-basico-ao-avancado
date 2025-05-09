// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b;
}
console.log(soma(10, 3));

// Retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(3, 1));

const elevadoADois = x => Math.pow(x, 2);
console.log(elevadoADois(5));

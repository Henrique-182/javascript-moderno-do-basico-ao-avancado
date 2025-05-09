// Sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2, 3, 4, 5, 6, 7);
imprimirSoma();

// Função com retorno
function soma(a, b = 0) {
    return a + b;
}

const resultado = soma(1, 2);
console.log(resultado);

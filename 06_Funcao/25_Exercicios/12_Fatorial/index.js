function fatorial(x) {
    let resultado = 1

    while (x > 1) {
        resultado *= x


        x--
    }

    return resultado 
}

console.log(fatorial(5))
console.log(fatorial(4))

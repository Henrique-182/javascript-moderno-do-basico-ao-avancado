function multiplicar(x, y) {
    let total = 0;
    if (x >= 0 && y >= 0) {
        for (y; y > 0; y--) {
            total += x
        }
        return total;
    } 
    return 0;
}

const resultado = multiplicar(10, 7)

console.log(resultado)

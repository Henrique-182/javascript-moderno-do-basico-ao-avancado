function progressaoAritmetica(n, a1, r) {
    let x = a1 + (n - 1) * r

    console.log("PROGRESSÃO ARITMÉTICA")
    for (a1; a1 <= x; a1 += r) {
        console.log(a1 + " -> ")
    }
    console.log("FIM")
}

function progressaoGeometrica(n, a1, q) {
    let x = a1 * q ** (n - 1)
    
    console.log("PROGRESSÃO GEOMÉTRICA")
    for (a1; a1 <= x; a1 *= q) {
        console.log(a1 + " -> ")
    }
    console.log("FIM")
}

progressaoAritmetica(24, 32, 6)
progressaoGeometrica(5, 2, 3)

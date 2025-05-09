function classificaTriangulo(x, y, z) {
    let eTriangulo = (x + y > z) && (x + z > y) && (z + y > x)

    if (eTriangulo) {
        let eEquilatero = (x == y) && (x == z) && (y == z)
        let eEscaleno = (x != y) && (x != z) && (y != z)

        if (eEquilatero) {
            return "Triângulo equilátero"
        } else if (eEscaleno) {
            return "Triângulo escaleno"
        } else {
            return "Triângulo isósceles"
        }
    }

    return "Não é triângulo"
}

console.log(classificaTriangulo(4, 3, 2))

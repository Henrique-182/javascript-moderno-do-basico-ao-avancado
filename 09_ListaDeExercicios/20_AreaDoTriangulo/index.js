function areaDoTriangulo(base, largura) {

    let area = (base * largura) / 2

    return area.toFixed(2)
}

let base = 9.25
let altura = 13.1
const resultado = areaDoTriangulo(base, altura)

console.log(resultado)

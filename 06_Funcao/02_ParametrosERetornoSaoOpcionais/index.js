function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m²`)
    } else {
        return area
    }
}

area(10, 5)
console.log(area(2, 2))
console.log(area(2))
console.log(area())

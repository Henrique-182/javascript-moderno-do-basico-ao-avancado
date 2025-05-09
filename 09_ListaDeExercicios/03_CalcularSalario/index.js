function calcularSalario(horasTrabalhadas, recebimentoPorHora) {
    return `Salário igual a R$${horasTrabalhadas * recebimentoPorHora}`
}

const resultado = calcularSalario(150, 40.5)

console.log(resultado)

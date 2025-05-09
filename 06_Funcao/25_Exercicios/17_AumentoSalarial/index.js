function aumentoSalarial(plano, salario) {
    switch (plano) {
        case "A":
            return salario * 1.1
        case "B":
            return salario * 1.15
        case "C":
            return salario * 1.2
        default:
            return "Plano inválido";
    }
}

console.log(aumentoSalarial("A", 1000))
console.log(aumentoSalarial("B", 1000))
console.log(aumentoSalarial("C", 1000))

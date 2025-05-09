function anuidadeAssociacao(mes, valor) {
    switch (mes) {
        case "1":
            return valor
        case "2":
            return (valor * (1 + 0.05) ** 1)
        case "3":
            return (valor * (1 + 0.05) ** 2)
        case "4":
            return (valor * (1 + 0.05) ** 3)
        case "5":
            return (valor * (1 + 0.05) ** 4)
        case "6":
            return (valor * (1 + 0.05) ** 5)
        case "7":
            return (valor * (1 + 0.05) ** 6)
        case "8":
            return (valor * (1 + 0.05) ** 7)
        case "9":
            return (valor * (1 + 0.05) ** 8)
        case "10":
            return (valor * (1 + 0.05) ** 9)
        case "11":
            return (valor * (1 + 0.05) ** 10)
        case "12":
            return (valor * (1 + 0.05) ** 11)                        
        default:
            return "Mês inválido";
    }
}

console.log(anuidadeAssociacao("2", 100))
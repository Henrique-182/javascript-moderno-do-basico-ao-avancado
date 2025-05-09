function numeroPorExtenso(x) {
    switch (x) {
        case "0":
            return "zero"
        case "1":
            return "um"
        case "2":
            return "dois"
        case "3":
            return "três"
        case "4":
            return "quatro"
        case "5":
            return "cinco"
        case "6":
            return "seis"
        case "7":
            return "sete"
        case "8":
            return "oite"
        case "9":
            return "nove"
        case "10":
            return "dez"
        default:
            return "Número fora do intervalo"
    }
}

console.log(numeroPorExtenso("4"))
console.log(numeroPorExtenso("10"))

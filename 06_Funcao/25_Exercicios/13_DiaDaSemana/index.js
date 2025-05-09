function diaDaSemana(dia) {
    switch (dia) {
        case 1:
            return "Domingo"
        case 2:
            return "Segunda"
        case 3:
            return "Terça"
        case 4:
            return "Quarta"
        case 5:
            return "Quinta"
        case 6:
            return "Sexta"
        case 7:
            return "Sábado"
        default:
            return "Dia inválido"
    }
}

console.log(diaDaSemana(5345))
console.log(diaDaSemana(5))

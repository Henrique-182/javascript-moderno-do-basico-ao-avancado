function fruta(nome) {
    switch (nome) {
        case  "maçã":
            return "Não vendemos esta fruta aqui"
        case "kiwi":
            return "Estamos com escassez de kiwis"
        case "melancia":
            return "Aqui está, são 3 reais o quilo"
        default:
            return "Valor inválido"
    }
}

console.log(fruta("maçã"))
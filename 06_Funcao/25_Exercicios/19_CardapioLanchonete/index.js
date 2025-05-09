function cardapioLanchonete(codigo, quantidade) {
    switch (codigo) {
        case "100":
            return quantidade * 3
        case "200":
            return quantidade * 4
        case "300":
            return quantidade * 5.5
        case "400":
            return quantidade * 7.5
        case "500":
            return quantidade * 3.5
        case "600":
            return quantidade * 2.8
        default:
            return "Código Inválido";
    }
}

console.log(cardapioLanchonete("100", 5))
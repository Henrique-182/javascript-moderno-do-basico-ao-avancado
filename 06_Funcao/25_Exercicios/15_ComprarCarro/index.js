function comprarCarro(modelo) {
    switch (modelo) {
        case "hatch":
            return "Compra efetuada com sucesso"
        case "sedan": case "caminhonete": case "motocicleta":
            return "Tem certeza que não prefere este modelo?"
        default:
            return "Não trabalhamos com este tipo de automóvel aqui"
    }
}

console.log(comprarCarro('hatch'))
console.log(comprarCarro('sedan'))
console.log(comprarCarro('xxxxxx'))

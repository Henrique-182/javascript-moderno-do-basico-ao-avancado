const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true },
    { nome: "iPad", preco: 4199, fragil: true },
    { nome: "Copo de Vidro", preco: 12.49, fragil: true },
    { nome: "Copo Plástico", preco: 2499, fragil: false },
]

let resultado = produtos.filter(function (valor, indice, array) {
    return valor.fragil == true
})

console.log(resultado)

const frageis = x => x.fragil
const acimade500 = x => x.preco > 500

resultado = produtos.filter(frageis).filter(acimade500)
console.log(resultado)

Array.prototype.filter2 = function (callback) {
    let newArray = []

    for(let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }

    return newArray
}

const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true },
    { nome: "iPad", preco: 4199, fragil: true },
    { nome: "Copo de Vidro", preco: 12.49, fragil: true },
    { nome: "Copo Plástico", preco: 2499, fragil: false },
]

const frageis = x => x.fragil
const acimade500 = x => x.preco > 500

resultado = produtos.filter2(frageis).filter2(acimade500)
console.log(resultado)

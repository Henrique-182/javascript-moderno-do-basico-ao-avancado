Array.prototype.map2 = function (callback) {
    const newArray = []

    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }

    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}',
    '{ "nome": "Borracha", "preco": 3.45}'
]

// Retornar um array apenas com os preços
const jsonToObject = x => JSON.parse(x)
const getPreco = x => x.preco

const resultado = carrinho.map2(jsonToObject).map2(getPreco)

console.log(resultado)

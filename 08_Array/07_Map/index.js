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

const resultado = carrinho.map(jsonToObject).map(getPreco)

console.log(resultado)

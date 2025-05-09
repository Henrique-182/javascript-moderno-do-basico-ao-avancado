function criarProduto(nomeParam, precoParam) {
    return {
        nome: nomeParam,
        preco: precoParam,
        desconto: 0.05
    }
}

console.log(criarProduto('notebook', 3000))

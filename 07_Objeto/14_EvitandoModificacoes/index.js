// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: "nome",
    preco: 12.3,
    qtde: 5
})

produto.nome = "nome nome"
delete produto.preco
produto.tag = "tag"
console.log(Object.isExtensible(produto))
console.log(produto)

// Object.seal
const pessoa = Object.seal({
    nome: "Juliana",
    idade: 35
})

delete pessoa.nome
pessoa.sobrenome = "Alves"
pessoa.idade = 30

console.log(Object.isSealed(pessoa))
console.log(pessoa)

// Object.freeze = selado + valores constantes
const livro = Object.freeze({
    nome: "1984"
})
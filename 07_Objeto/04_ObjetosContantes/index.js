// pessoa -> 123 -> {...}
// Constante é a referência para o objeto pessoa, não seus atributos
const pessoa = {
    nome: 'Joao'
}
pessoa.nome = 'Pedro'
pessoa.idade = 20
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'}

Object.freeze(pessoa)
pessoa.nome = 'Maria'
pessoa.endereco = 'Rua a'
console.log(pessoa)

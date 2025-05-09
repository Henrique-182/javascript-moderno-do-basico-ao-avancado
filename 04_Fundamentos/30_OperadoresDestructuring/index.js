const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua",
        numero: 123
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade:i } = pessoa // após utilizar um alias, não é possível usar "nome", somente "n"
console.log(n, i)

const { sobrenome:s, humorada:h = true } = pessoa
console.log(s, h)

const { endereco: { logradouro: l, numero: num, cep: c }} = pessoa
console.log(l, num, c)

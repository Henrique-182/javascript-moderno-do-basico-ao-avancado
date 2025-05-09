// rest (juntar) // spread (espalhar)
// usar rest com parâmetro de função

// user spread com objeto
const funcionario = {
    nome: 'Maria',
    salario: 1231
}
const clone = { ativo: true, ...funcionario }
console.log(clone)

// User spread com array
const grupoA = ['João', 'Pedro']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)

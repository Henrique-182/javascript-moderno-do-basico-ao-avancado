// Não aceita repetição/ não indexada
const times = new Set()
times.add('Vasco').add('São Paulo').add("Internacional").add('Vasco')
console.log(times)

console.log(times.size)
console.log(times.has('São Paulo'))

times.delete('Internacional')

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)
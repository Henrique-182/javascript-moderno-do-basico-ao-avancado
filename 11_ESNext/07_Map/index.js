const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.get('angular').framework)

const chavesVariadas = new Map([
    [function () {}, 'funcao'],
    [{}, 'Object'],
    [123, 'Número']
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})
console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(321, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas)

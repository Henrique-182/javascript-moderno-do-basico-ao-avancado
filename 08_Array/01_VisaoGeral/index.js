console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Carlos', 'Ana', 'Bia']
console.log(aprovados[0])
console.log(aprovados[6])

aprovados[9] = 'Rafael'
aprovados.push('Paulo')

console.log(aprovados.length)

aprovados.sort()
console.log(aprovados)

delete aprovados[0]
console.log(aprovados)

aprovados.splice(1, 2) // A partir do [1], exclui 2
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // A partir do [1], substitui 2
console.log(aprovados)

const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(valor, indice, array) {
    return valor * 2
})
console.log(resultado, nums)

const soma10 = x => x + 10
const tripo = x => x * 3
const paraDinheiro = x => `R$${parseFloat(x).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(tripo).map(paraDinheiro)
console.log(resultado)

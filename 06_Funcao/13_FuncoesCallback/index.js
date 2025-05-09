const notas = [7.7, 6.5, 5.2, 8.0, 7.1, 9.0]

// Sem Callback
let menores = []
for (let i in notas) {
    if (notas[i] < 7) menores.push(notas[i])
}
console.log(menores)

// Com Callback
menores = []
menores = notas.filter(x => x < 7)
console.log(menores);

// 2 
menores = []
menores = notas.filter(function (x) {
    return x < 7
})
console.log(menores);
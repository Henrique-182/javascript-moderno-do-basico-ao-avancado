let contador = 1

while (contador <= 10) {
    console.log("contador = " + contador)
    contador++
}

for (let i = 0; i <= 10; i++) {
    console.log("i = " + i)
}

const notas = [5.1, 6, 7.5, 8, 9.9]

for (let j = 0; j < notas.length; j++) {
    console.log(`${j+1}ª nota = ${notas[j]}`)
}

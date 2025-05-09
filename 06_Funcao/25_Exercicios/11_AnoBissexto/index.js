function anoBissexto(ano) {

    let eDivisivelPor4 = ano % 4 == 0
    let eDivisivelPor100 = ano % 100 == 0
    let eDivisivelPor400 = ano % 400 == 0

    let condicao1 = eDivisivelPor4
    let condicao2 = eDivisivelPor400 || !eDivisivelPor100

    return condicao1 && condicao2
}

console.log(anoBissexto(0))
console.log(anoBissexto(4))
console.log(anoBissexto(100))
console.log(anoBissexto(400))
console.log(anoBissexto(800))
console.log(anoBissexto(2020))
console.log(anoBissexto(2021))
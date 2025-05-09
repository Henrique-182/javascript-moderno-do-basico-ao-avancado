function checarAnoBissexto(ano) {

    let eDivisivelPor4 = ano % 4 == 0
    let eDivisivelPor100 = ano % 100 == 0
    let eDivisivelPor400 = ano % 400 == 0

    let condicao1 = eDivisivelPor4
    let condicao2 = eDivisivelPor400 || !eDivisivelPor100

    return condicao1 && condicao2
}

let ano = 2400
const resultado = checarAnoBissexto(ano)

console.log(resultado)
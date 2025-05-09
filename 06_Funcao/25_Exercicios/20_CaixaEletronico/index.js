function caixaEletronico(valor) {
    let cedulasDe100 = 0
    let cedulasDe50 = 0
    let cedulasDe10 = 0
    let cedulasDe5 = 0
    let cedulasDe1 = 0

    while (valor >= 100) {
        cedulasDe100++
        valor -= 100
    }
    while (valor >= 50) {
        cedulasDe50++
        valor -= 50
    }
    while (valor >= 10) {
        cedulasDe10++
        valor -= 10
    }
    while (valor >= 5) {
        cedulasDe5++
        valor -= 5
    }
    while (valor >= 1) {
        cedulasDe1++
        valor -= 1
    }   

    if (cedulasDe100 != 0) console.log(`${cedulasDe100} nota(s) de R$100`)
    if (cedulasDe50 != 0) console.log(`${cedulasDe50} nota(s) de R$50`)
    if (cedulasDe10 != 0) console.log(`${cedulasDe10} nota(s) de R$10`)
    if (cedulasDe5 != 0) console.log(`${cedulasDe5} nota(s) de R$5`)
    if (cedulasDe1 != 0) console.log(`${cedulasDe1} nota(s) de R$1`)
    
}

caixaEletronico(504)

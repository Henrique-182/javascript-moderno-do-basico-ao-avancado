function funcaoDaSorte(numeroUsuario) {

    const numeroAleatorio = Math.floor(Math.random() * 10 + 1)
    
    return numeroUsuario == numeroAleatorio 
        ? "Parabéns! O número sorteado foi " + numeroAleatorio
        : "Que pena! O número sorteado foi " + numeroAleatorio
}

let numero = 10
const resultado = funcaoDaSorte(numero)

console.log(resultado)

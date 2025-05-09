function nomeDoMes(mesNumero) {
    return mesNumero == 1 ? "janeiro" 
        : mesNumero == 2 ? "fevereiro"
        : mesNumero == 3 ? "março"
        : mesNumero == 4 ? "abril"
        : mesNumero == 5 ? "maio"
        : mesNumero == 6 ? "junho"
        : mesNumero == 7 ? "julho"
        : mesNumero == 8 ? "agosto"
        : mesNumero == 9 ? "setembro"
        : mesNumero == 10 ? "outubro"
        : mesNumero == 11 ? "novembro"
        : mesNumero == 12 ? "dezembro"
        : "mês desconhecido"
}

const resultado = nomeDoMes(6)

console.log(resultado)

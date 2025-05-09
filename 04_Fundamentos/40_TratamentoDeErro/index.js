function tratarErroELancar(erro) {
    //throw new Error("...")
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(x) {
    try {
        console.log(x.toUpperCase() + "!!!")
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log("Finally")
    }
}

imprimirNomeGritado("abc")

function imparesEntre(inicio = 0, fim = 100) {
    if (inicio > fim) {
        [inicio, fim] = [fim, inicio]
    }

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }

}

imparesEntre(100, 0)
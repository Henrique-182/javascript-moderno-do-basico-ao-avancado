function intervalo10E20(array) {
    let dentroIntervalo = 0
    let foraIntervalo = 0

    for (i in array) {
        numero = array[i]
        if (numero >= 10 && numero <= 20) {
            dentroIntervalo++
        } else {
            foraIntervalo++
        }
    }

    console.log(`Dentro do intervalo ${dentroIntervalo} - Fora do intervalo ${foraIntervalo}`)
}

intervalo10E20([1, 15, 10, 20, 5, 21, 9])
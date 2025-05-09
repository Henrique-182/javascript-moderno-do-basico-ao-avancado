function media(array) {
    let media = 0
    let total = 0

    for (i in array) {
        let numero = array[i]
        total += numero
    }
    
    media = total / (parseInt(i) + 1)
    
    console.log(`A média é de ${media}`)
}

media([1, 2, 3, 4])

function trocaElementosVetores(v1, v2) {
    
    console.log(v1)
    console.log(v2)

    for (i in v1) {
        [v1[i], v2[i]] = [v2[i], v1[i]]
    }

    console.log(v1)
    console.log(v2)
}

trocaElementosVetores([1, 2, 3, 4, 5], [6, 7, 8, 9, 0])

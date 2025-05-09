function bhaskara(a, b, c) {
    let delta = Math.pow(b, 2) - (4 * a * c)

    if (delta >= 0) {
        let x1 = (- (b) + (Math.pow(delta, 1/2))) / (2 * a)
        let x2 = (- (b) - (Math.pow(delta, 1/2))) / (2 * a)

        return [x1, x2]
    } else {
        return "Delta é negativo"
    }
}

console.log(bhaskara(3, -5, 12))
console.log(bhaskara(2, -6, 0))

function compras(x, y) {
    const comprarSorvete = x || y
    const comprarTv50 = x && y
    // const comprarTv32 = !!(x ^ y)
    const comprarTv32 = x != y
    const manterSaudavel = !comprarSorvete

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(false, true))
console.log(compras(true, true))
console.log(compras(false, false))

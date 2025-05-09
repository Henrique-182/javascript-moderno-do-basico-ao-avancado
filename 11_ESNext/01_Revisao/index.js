// let e const
{
    var a = 2
    let b = 3
}
console.log(a /*, b*/)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = 'Cod3r!' 
console.log(l, e, tras)

const [x, , z] = ['Java', 'C#', 'C++']
console.log(x, z)

const {idade: idad, nome} = {nome: "Henrique", idade:19}
console.log(idad, nome)

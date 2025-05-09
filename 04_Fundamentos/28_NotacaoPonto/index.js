console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
obj1.nome = "Carrinho"
console.log("Objeto 1 = "+ obj1.nome)

function Obj(nome) {
    this.nome = nome
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log("Objeto 2 = "+ obj2.nome)
console.log("Objeto 3 = "+ obj3.nome)

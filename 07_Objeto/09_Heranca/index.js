// Cadeia de protótipos (prototype chain)
const avo = {
    attr1: 'A'
}
const pai = {
    __proto__: avo, 
    attr2: 'B'
}
const filho = {
    __proto__: pai,
    attr3: 'C'
}

console.log(filho.attr0)
console.log(filho.attr1)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual+ delta <= this.velMax) {
            this.velAtual += delta
        } else [
            this.velAtual = this.velMax
        ]
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

ferrari.acelerarMais(57)
ferrari.acelerarMais(33)
console.log(ferrari.status())

volvo.acelerarMais(50)
volvo.acelerarMais(25)
console.log(volvo.status())

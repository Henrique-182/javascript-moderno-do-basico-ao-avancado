// ES8: Object.values / Object.entries
const obj = {a:1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Notação literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return `${this.nome}`
    }
}
console.log(pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {}
new Cachorro()
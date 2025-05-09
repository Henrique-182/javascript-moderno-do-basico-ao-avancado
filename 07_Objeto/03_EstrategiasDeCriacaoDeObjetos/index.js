// Usando a notação literal
const obj1 = {}
console.log(obj1)

const obj2 = new Object

// Object em JS
console.log(typeof Object, typeof obj1, typeof obj2, typeof new Object)

// Funções construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto) 
    }
}

const p1 = new Produto('Caneta', 100, 0.1)
console.log(p1.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salario, faltas) {
    return {
        nome, salario, faltas,
        getSalario() {
            return (salario / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario("Joao", 3000, 5)
console.log(f1.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = "Ana"
console.log(filha)

// Uma função que retorna Objeto
const fromJSON = JSON.parse('{"nome": "JavaScript"}')
console.log(fromJSON)

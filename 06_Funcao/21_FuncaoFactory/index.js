class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Olá! Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('Henrique')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Olá! Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa("João")
p2.falar()
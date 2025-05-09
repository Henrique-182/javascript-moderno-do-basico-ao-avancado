function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Olá! Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("Henrique")
p1.falar()
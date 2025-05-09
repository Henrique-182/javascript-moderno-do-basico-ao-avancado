function Pessoa() {
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(idade)
    }, 1000)
}

new Pessoa
// Criação de forma literal
function funcao() {}

// Armazenar em uma variável
const funcao2 = function () {}

// Armazenar em um array
const array = [function (x, y) { return x + y }, funcao, funcao2]
console.log(array[0](2,3))

// Armazenar em um atributo de objeto
const objeto = {}
objeto.falar = function () { return "Olá, Mundo!" }
console.log(objeto.falar())

// Passar função como parâmetro
function run(fun) {
    fun()
}

run(function () { console.log("Executando...") })

// Uma função pode retornar/conter uma função
function soma(x, y) {
    return function (z) {
        console.log(x + y + z)
    }
}
soma(1, 2)(3)
const primeiraSoma = soma(2, 3)
primeiraSoma(5)

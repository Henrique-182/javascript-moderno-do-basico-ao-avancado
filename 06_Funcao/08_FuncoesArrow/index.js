let dobro = function(a) {
    return a * 2
}

dobro = (a) => {
    return a * 2
}

dobro = a => a * 2
console.log(dobro(5));

let ola = function() {
    return "Ola"
}

ola = () => "Ola"
ola = _ => "Ola" // possui um parâmetro
console.log(ola());

let comparaComThis = function(x) {
    console.log(x === this);
}
console.log("1- É igual a global? 1")
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)

console.log("2- É igual a global?")
comparaComThis(global)
console.log("3- É igual a obj?")
comparaComThis(obj)

let comparaComThisArrow = x => console.log(x === this);

console.log("4- É igual a global?")
comparaComThisArrow(global)

console.log("5- É igual a module.exports?")
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)

console.log("6- É igual a obj?")
comparaComThisArrow(module.obj)

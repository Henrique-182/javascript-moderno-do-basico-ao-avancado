const moduloA = require('C:\\Users\\User\\Documents\\GitHub\\javascript-moderno-do-basico-ao-avancado\\10_Node\\04_Require\\index.js')
const moduloAA = require('../../index')
console.log(moduloA)
console.log(moduloAA)

const moduloC = require('./pastaC/indexC')
console.log(moduloC)

const saudacao = require('saudacao')
console.log(saudacao)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080)

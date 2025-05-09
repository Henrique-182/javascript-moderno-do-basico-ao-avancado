// npm init -y
// npm i --save express body-parser

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(
    bodyParser.urlencoded({extended: true})
)

app.post(
    "/usuario",
    (req, res) => {
        console.log(req.body)
        res.send('<h1>Parabéns. Usuário criado</h1>')
    }
)

app.post(
    "/usuario/:id",
    (req, res) => {
        console.log(req.params.id)
        console.log(req.body)
        res.send('<h1>Parabéns. Usuário Alterado</h1>')
    }
)

app.listen(5500)

// npm init -y
// npm i --save express body-parse

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
        res.send('<h1>Parabéns</h1>')
    }
)

app.listen(5500)

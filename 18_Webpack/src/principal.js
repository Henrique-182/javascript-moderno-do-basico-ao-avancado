// npm i --save-dev webpack webpack-cli

import Pessoa from "./pessoa"
import './modulos/modulaA'
import './assets/index.js'

const atendente = new Pessoa

console.log(atendente.cumprimentar())

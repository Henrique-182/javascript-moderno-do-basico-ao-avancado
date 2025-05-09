// npm i lodash

const _ = require('lodash')

setInterval(() => {
    console.log(_.random(1, 10))
}, 2000);

// npm i -g nodemon

// nodemon index.js
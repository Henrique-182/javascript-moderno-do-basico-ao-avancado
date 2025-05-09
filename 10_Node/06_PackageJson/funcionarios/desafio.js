const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    const mulheres = funcionarios.filter(f => f.genero == 'F')
    const mulheresChinesas = mulheres.filter(f => f.pais == 'China')
   
    const mulherChinesaMenorSalario = mulheresChinesas.reduce((acumulador, atual) => {
        if (acumulador.salario === undefined) {
            acumulador = atual
        } 
        if (atual.salario < acumulador.salario) {
            acumulador = atual
        }
        return acumulador
    }, {})

    console.log(mulherChinesaMenorSalario)
})

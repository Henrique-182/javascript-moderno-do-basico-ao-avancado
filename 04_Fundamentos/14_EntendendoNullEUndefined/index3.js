let valor; // não inicializada
console.log('Valor não inicializado = ' + valor);

valor = null; // ausência de valor
console.log('Ausência de valor = ' + valor); 

const produto = {};
console.log(produto); 
console.log(produto.preco); 

produto.preco = undefined; // evite atribuir undefined
console.log(produto);

produto.preco = null; // sem preço
console.log(produto);

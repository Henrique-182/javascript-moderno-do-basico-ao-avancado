let isAtivo = false;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log("OS VERDADEIROS");

console.log(!!3);
console.log(!!-3);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("OS FALSOS");

console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("PARA FINALIZAR");

console.log(!!('' || null || 0 || ' '));

let nome = '';
console.log(nome || 'Desconhecido');
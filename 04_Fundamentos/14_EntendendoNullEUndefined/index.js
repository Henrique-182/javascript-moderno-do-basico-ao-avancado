/*
    OBJETOS (ATRIBUIÇÃO POR REFERÊNCIA)
    APONTAM PARA O MESMO LOCAL DA MEMÓRIA
*/
const a = {
    name: 'Teste'
};

console.log(a);

const b = a; // Apontam para o mesmo lugar na memória
b.name = "Teste Teste";

console.log(a);

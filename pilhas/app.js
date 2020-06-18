// Criando um pilha e testando as funcionalidades

const stack = require('./pilha')

const pilha = new stack()

pilha.push(1)
pilha.push(2)
pilha.push(3)


const estaVazia = pilha.isEmpty()
const tam = pilha.count
const printPilha = pilha.toString()

console.log(estaVazia)
console.log(tam)
console.log(printPilha)



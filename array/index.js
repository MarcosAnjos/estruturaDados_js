// Estrutura de dados com Arr
var avgtemp = []

avgtemp[0] = 31.9
avgtemp[1] = 35.3
avgtemp[2] = 42

console.log(`Acessando a posicao numbero 1 do meu arr : [${avgtemp[1]}]`)

// Criando e inicializando arr
var daysOfWeek = new Array('Sunday', 'Monday', 'Tusday', 'Wedenesday', 'Thursday', 'Friday', 'Saturday')

// daysOfWeek[0] = 'Sunday';

console.log(`Dia da semana ${ daysOfWeek[0] }`)
console.log(`Tamanho Arr:  ${ daysOfWeek.length }`)


// Intereção com arr

var fibonaci = []

fibonaci[0] = 0
fibonaci[1] = 1
fibonaci[2] = 1

// calc
for(var i = 3; i < 20; i++){
    fibonaci[i] = fibonaci[ i - 1 ] + fibonaci[ i - 2 ]
}

// console.log(fibonaci)

// imprimir
for(var i = 0; i < fibonaci.length; i++){
    // console.log(fibonaci[i])
}


// Add novos elemtos arr
var numbers = [0,1,2,3,4,5,6,7,8,9]

numbers[10] = 10
numbers[numbers.length] = 11

// Arr possui alguns metodos nativio

// PUSH()
numbers.push(13)

// UNSHIFT() : elemento antes
numbers.unshift(-1)



console.log(numbers)
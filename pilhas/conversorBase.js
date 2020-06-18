// Func para conversao decimal para as bases 2 a 36. Em vez dividir o num decimal por 2
// podemos passar a base desejada como um argumento o metodo e usa-la nas 
// operacao de divisao.

const stack = require('./pilha')

function baseConverter(decNumber, base) {
    const resStack = new stack() 
    const digits = '0123456789ABCDEFGHIJLMNOPQRSTUVWXYZ' // tam = 35 = max base
    let number = decNumber
    let rem 
    let baseString = ''

    if(!base >= 2 && base <= 36)
        return ''
    
    while( number > 0 ){
        rem = Math.floor( number % base ) // Pegando o resto
        resStack.push(rem) // add pilha
        number = Math.floor( number/base) // divisão inteira!
    }

    while(!resStack.isEmpty()) {
        baseString += digits[resStack.pop()]
    }
    
    return baseString
}
module.exports = baseConverter
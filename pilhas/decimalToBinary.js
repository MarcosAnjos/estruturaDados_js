const stack = require('./pilha')

function decimalToBinary( decNumber ){

    const remStack = new stack()
    let number = decNumber
    let rem
    let binaryString = ''

    while( number > 0 ){ // resto divisao nao for zero
        rem = Math.floor(number % 2) // retorna o numero inteiro: 1.99 = 1 (resto)
        remStack.push(rem) // add valor na minha pilha
        number = Math.floor(number/2) // atualiza o numero que sera dividido (parte inteira)
    }
    while(!remStack.isEmpty()){
        binaryString += remStack.pop()
    }
    return binaryString
}
// module { decimalToBinary }
module.exports = decimalToBinary
// --------------------------------------------
//  Convertendo numeros decimais para binarios
//  Base [ 2 ao 32 ]
// --------------------------------------------

const decBase = require('./conversorBase')

let base = 35
let num = 100345

const convert = decBase( num, base )

console.log(convert)

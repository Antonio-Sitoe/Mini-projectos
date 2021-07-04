const x = +(prompt("Digite o valor de X"))
const y = +(prompt("Digite o valor de Y"))

if (x > 0 && y > 0) {
    console.log('Q1')
} else if (x > 0 && y < 0) {
    console.log('Q4')
} else if (x < 0 && y < 0) {
    console.log('Q3')
} else if (y > 0 && x < 0) {
    console.log('Q2')
} else if (x === 0 && y === 0) {
    console.log('Origem')
} else if (x === 0 && y !== 0) {
    console.log('EIXO Y')
} else if (x !== 0 && y === 0) {
    console.log('EIXO X')
}else{
    console.log('LETSO')
}
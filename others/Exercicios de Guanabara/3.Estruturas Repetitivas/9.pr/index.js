const n = +(prompt('quantos numeros vai digitar'))

for (let i = 0; i < n; i++) {
    let num = +(prompt("Digite um numero"))
    if (num === 0) {
        console.log(num)
        console.log('nulo')
    } else if (num < 0 && num % 2 === 0) {
        console.log(num)
        console.log('PAR NEGATIVO')
    } else if (num < 0 && num % 2 !== 0) {
        console.log(num)
        console.log('IMPAR NEGATIVO')
    } else if (num > 0 && num % 2 === 0) {
        console.log(num)
        console.log('PAR POSITIVO')
    } else {
        console.log(num)
        console.log('IMPAR POSITVO')

    }
}
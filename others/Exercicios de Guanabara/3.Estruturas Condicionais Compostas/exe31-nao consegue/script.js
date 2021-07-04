const lado1 = Number(prompt('Digite o lado 1'))
const lado2 = Number(prompt('Digite o lado 1'))
const lado3 = Number(prompt('Digite o lado 1'))

if (lado1 === lado2 && lado2 === lado3) {
    console.log("Triangulo EQUILATERO")
} else if (lado1 === lado2 && lado2 !== lado3) {
    console.log('Triangulo ISOSCELES')
} else if (lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3) {
    console.log("Triangulo ESCALENO")
} else if ((lado1 < (lado2 + lado3) && lado2 < (lado1 + lado3) && lado3 < (lado1 + lado3))) {
    console.log('e UM TRIANGULO')
} else {
    console.log("Nao e um triangulo")
}
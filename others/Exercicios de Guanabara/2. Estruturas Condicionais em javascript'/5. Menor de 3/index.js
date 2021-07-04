'use strict'

// Problema "menor_de_tres"
// Fazer um programa para ler três números inteiros. Em seguida, mostrar qual o menor dentre os três
// números lidos. Em caso de empate, mostrar apenas uma vez.

const first = +(prompt('Disk are first number'))
const second = +(prompt('Disk are second number'))
const three = +(prompt('Disk are three number'))

const numbers = [first, second, three];
console.log("Menor Numero", Math.min(...numbers))
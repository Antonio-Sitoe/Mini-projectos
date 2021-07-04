'use strict'

// Fazer um programa para ler os três coeficientes de uma equação do segundo grau. Usando a fórmula
// de Baskara, calcular e mostrar os valores das raízes x1 e x2 da equação com quatro casas decimais,
// conforme exemplo. Se a equação não possuir raízes reais, mostrar uma mensagem.

const a = +(prompt('digite o valor de a'));
const b = +(prompt("DIgite o valor de b"));
const c = +(prompt("DIgite o valor de c"));

function delta() {
    return b ** 2 - 4 * a * c
}

if (delta() < 0) {
    console.log('Esta equacai nao pussui Raizes Reias')
} else {
    const x1 = (-b + Math.sqrt(delta())) / 2 * a
    const x2 = (-b - Math.sqrt(delta())) / 2 * a

    console.log(x1.toFixed(2))
    console.log(x2.toFixed(2))
}
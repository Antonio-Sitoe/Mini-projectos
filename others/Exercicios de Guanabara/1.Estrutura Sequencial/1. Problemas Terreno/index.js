const largura = +(prompt('Digite a largura do terreno ?')),
    comprimento = +(prompt('Digite o comprimento do terreno')),
    valorDeMetroQuadrado = +(prompt("Digite o valor do metro quadrado ?"));

const area = comprimento * largura,
    preco = area * valorDeMetroQuadrado;

console.log('A area do quadrado e :', area)
console.log('O preco do terreno :', preco)
const linhas = +prompt("Qual a quantidade de linhas da matriz?");
const colunas = +prompt("Qual a quantidade de colunas da matriz?");

let vetor = [];
let vetor2 = [];
let matriz = [];

for (let i = 0; i < linhas; i++) {
  for (let j = 0; j < colunas; j++) {
    let num = +prompt("digite um numero");
    vetor[j] = num;
  }
  matriz[i] = [...vetor];
}

let soma = 0;
for (let i = 0; i < linhas; i++) {
  for (let j = 0; j < colunas; j++) {
    soma += matriz[i][j];
  }
  vetor2[i] = soma;
  soma = 0;
}

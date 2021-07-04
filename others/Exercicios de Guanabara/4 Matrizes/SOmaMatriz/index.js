const linhas = +prompt("Qual a quantidade de linhas da matriz?");
const colunas = +prompt("Qual a quantidade de colunas da matriz?");

let vetor = [];
let matriz = [];

for (let i = 0; i < linhas; i++) {
  for (let j = 0; j < colunas; j++) {
    let num = +prompt("digite um numero");
    vetor[j] = num;
  }
  matriz[i] = [...vetor];
}

let vetor2 = [];
let matriz2 = [];

for (let i = 0; i < linhas; i++) {
  for (let j = 0; j < colunas; j++) {
    let num = +prompt("digite um numero");
    vetor2[j] = num;
  }
  matriz2[i] = [...vetor2];
}
let matrizSoma = [];

let [vet, vet2] = matriz;
let [vt, vt2] = matriz2;

for (let i = 0; i < linhas; i++) {
  matrizSoma[i] = vet[i] + vt[i];
}
for (let i = 0; i < linhas; i++) {
  matrizSoma.push(vet2[i] + vt2[i]);
}

matrizSoma.forEach((item) => console.log(item));

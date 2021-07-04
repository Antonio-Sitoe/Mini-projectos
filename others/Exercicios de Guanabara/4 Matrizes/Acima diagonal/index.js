const n = +prompt("Qual a quantidade de linhas da matriz?");
let vetor = [];
let vetor2 = [];
let matriz = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let num = +prompt("digite um numero");
    vetor[j] = num;
  }
  matriz[i] = [...vetor];
}
let soma = 0;
let no = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
   if(i === 0 && j > 0){
     soma+= matriz[i][j]
   }else if(i ===1 && j <)
  }
}

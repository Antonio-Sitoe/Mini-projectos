const n = Number(prompt("Qual e a ordem da matriz?"));

let matriz = [];
let arr = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let element = +prompt(`Elemento ${i.toString()} e ${j.toString()}`);
    arr[j] = element;
  }
  matriz[i] = [...arr];
}

let neg = 0;
console.log(matriz);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i === j) {
      console.log(matriz[i][j], "posicao ", i, "e ", j);
    }
    if(matriz[i][j] < 0){
    neg++}
  }
}

console.log("negativos", neg);

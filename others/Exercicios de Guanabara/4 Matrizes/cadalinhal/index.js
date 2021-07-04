const n = Number(prompt("Qual e a ordem da matriz?"));

let matriz = [];
let newArray = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let ary = Number(prompt(`Elemento ${i.toString()} e ${j.toString()}`));
    newArray[j] = ary;
  }
  matriz[i] = [...newArray];
}

let reduce = matriz.map(item => Math.max(...item));
reduce.forEach(item => console.log(item))

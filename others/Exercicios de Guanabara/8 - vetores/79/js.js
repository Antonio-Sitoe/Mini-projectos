/**8) Escreva um programa que leia 15 números e guarde-os em um vetor. No final,
mostre o vetor inteiro na tela e em seguida mostre em que posições foram
digitados valores que são múltiplos de 10. */


let vetor = [];
for (let i = 0; i < 15; i++) {
  let num = +(prompt("digite um numero"));
  vetor.push(num);
}

vetor.forEach((num, indice) => {
  if (num % 2 == 0){
    console.log(num, indice)
  }
})


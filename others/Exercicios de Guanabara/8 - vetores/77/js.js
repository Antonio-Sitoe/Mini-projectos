/*Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No
final, mostre uma listagem com todos os nomes informados, na ordem inversa
daquela em que eles foram informados.*/




let vetor = [];
for (let i = 0; i < 7; i++) {

  let nome = prompt("digite um nome")
    vetor.push(nome);

}

console.log(vetor.reverse())
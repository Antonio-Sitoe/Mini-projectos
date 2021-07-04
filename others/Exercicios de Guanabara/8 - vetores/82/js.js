let vetor = [];
let media = 0;
let aluno = 0;

for (let i = 0; i < 10; i++) {
  const nota = +(prompt('Digite a sua nota'));
  vetor.push(nota);
}

for (let nota of vetor) {
  media += nota;
}
media = media / vetor.length;

for (let nota of vetor) {
  if (nota > media) {
    aluno++
  }
}

let maiorNota = vetor[0];

vetor.forEach((vet) => {
  if (vet > maiorNota) {
    maiorNota = vet;
  }
})

vetor.map((vet, indice) => {
  if (vet === maiorNota) {
    console.log('A maior nota esta na posicao ', indice)
  }
})

console.log("A media e ", media)

console.log('Alunos acima da media ', aluno)

console.log('A maior nota ', maiorNota)
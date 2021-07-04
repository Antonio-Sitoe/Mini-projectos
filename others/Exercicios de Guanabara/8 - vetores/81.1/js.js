let vetor = [];
let i = 0;
while (i < 8) {
  let idade = +(prompt('digite um numero'));
  vetor.push(idade);
  i++
}

const max = vetor.reduce((acumulador, item) => acumulador + item)

let maiorIdade = vetor[0]
vetor.map(item => {
  return item >= maiorIdade ? maiorIdade = item : maiorIdade
})


vetor.map((item, indice) => {
  if (item > 25) {
    console.log('pessoas grandes posicao ', indice)
  }
  if(maiorIdade === item){
    console.log(' a mair idade esta na posicao', indice)
  }
})


let media = max / vetor.length;

console.log('MEDIA DAS IDADES', media)

console.log('maior idade ', maiorIdade)

console.log(vetor)
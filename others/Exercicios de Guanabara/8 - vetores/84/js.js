let nomes = [];
let idades = [];


for (let i = 0; i < 4; i++) {
  let nome = prompt('digite o seu nome');
  let idade = +(prompt('digite o sua idade'));
  nomes.push(nome)
  idades.push(idade)
}


idades.forEach((idade, i) => {
  if (idade < 18) console.log(nomes[i])
})
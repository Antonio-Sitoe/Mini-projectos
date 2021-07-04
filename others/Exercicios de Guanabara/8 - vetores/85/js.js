const nomes = [];
const sexos = [];
const salarios = [];



for (let i = 0; i < 5; i++) {
  const nome = prompt('Digite o seu nome');
  const sex = prompt('Digite o seu sexo em f e m')
  const sal = prompt('Digite o seu salario');
  nomes.push(nome);
  sexos.push(sex);
  salarios.push(sal);
}


const mulheres = sexos.map((mulher, index) => {
  const verificar = mulher === 'f' ? index : mulher;
  return verificar;
})

const resposta = salarios.map((salario, index) => {
  let sala;
  mulheres.map(indiceM => {
    if (index === indiceM) {
      sala = salario;
    }
  })
  return sala;
})



//nome
const nomeRes = nomes.map((nome, indice) => {
  let name;
  mulheres.map(indices => {
    if (indice === indices) {
      name = nome;
    }
  })
  return name;
})


nomeRes.map((nome, indice) => {
  if ((nome !== undefined) && (resposta[indice] >= 5000)) {
    console.log('Nome da pessoa', nome, " Sexo: Feminio", " salario", resposta[indice])
  }
})
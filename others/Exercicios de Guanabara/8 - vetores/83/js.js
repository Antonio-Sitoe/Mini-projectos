// 83) [DESAFIO] Crie uma lógica que preencha um vetor de 20 posições com números
// aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os
// números gerados e depois coloque o vetor em ordem crescente, mostrando no final
// os valores ordenados



function aleatorioNumbers(min, max) {
  let vetor = [];
  const h1 = document.createElement('h1')
  const h2 = document.createElement('h1')


  for (let i = 0; i < 20; i++) {
    let aleatorio = Math.floor(Math.random() * (max - min) + min);
    vetor.push(aleatorio)
  }
  h1.innerText =`vetor original: ${vetor}`;
  h2.innerText =`Ordem crescente: ${vetor.sort()}`;

  document.body.appendChild(h1)
  document.body.appendChild(h2)
}

aleatorioNumbers(0, 99)
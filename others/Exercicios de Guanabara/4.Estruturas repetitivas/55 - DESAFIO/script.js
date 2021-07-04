const h3 = document.querySelector('h3');;

/*
Vamos melhorar o jogo que fizemos no exercício 32. A partir de
agora, o computador vai sortear um número entre 1 e 10 e o jogador vai ter 4
tentativas para tentar acertar.
*/

function sorteio() {
  const sort = Math.floor(Math.random() * (10) + 1);
  return sort;
}
const h3Array = {
  acertou() {
    h3.innerText = `Voce e um vencedor o valor esta certo e ${sorteio()}`
    h3.style.color = `blue`;
  },
  perdeu() {
    h3.innerText = `Voce Perdeu o valor era ${sorteio()}`;
    h3.style.color = `red`
  },
}
let num = 0;

let i = 0;

while (i <= 3) {
   num = Number(prompt("Digite um numero aleatorio entre 1 - 10"))

  if (sorteio() === num) {
    i = 3
  h3Array.acertou();
  }
  i++
}

if (sorteio() !== num) {
  h3Array.perdeu()
}

console.log(sorteio())
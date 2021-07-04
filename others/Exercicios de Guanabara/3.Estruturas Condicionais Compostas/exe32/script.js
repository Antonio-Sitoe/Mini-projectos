const sorteio = Math.floor(Math.random() * (6 - 2 + 1) + 1);
const num = Number(prompt("Digite um numero aleatorio entre 1 - 5"))
const h3 = document.querySelector('h3');
const h3Array = {
  acertou() {
    h3.innerText = `Voce e um vencedor o valor esta certo e ${sorteio}`
    h3.style.color = `blue`;
  },
  perdeu() {
    h3.innerText = `Voce Perdeu o valor era ${sorteio}`;
    h3.style.color=`red`
  },
}

if (sorteio === num) h3Array.acertou();
else h3Array.perdeu();
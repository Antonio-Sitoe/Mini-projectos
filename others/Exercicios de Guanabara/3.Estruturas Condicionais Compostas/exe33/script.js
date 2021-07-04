const div = document.querySelector('[data-div]');
const form = document.querySelector('[data-form]');
const respo = document.querySelector('[data-resp]');

const itens = div.querySelectorAll('button');
const inputs = form.querySelectorAll('input')

form.querySelector('.inputBotao').addEventListener('click', click)

itens.forEach((item) => {
  item.addEventListener('click', onClick);
})


function onClick() {
  if (this.classList.contains('nao')) {
    div.querySelector('h3').innerText = `Voce cancelou, volte mais vezes`;
    removeItem();
  } else {
    removeItem();
    form.style.display = `block`;
    div.querySelector('h3').innerText=`Preencha os dados!`;
  }
}


function removeItem(form) {
  itens[0].style.display = `none`;
  itens[1].style.display = `none`;
}



function click(event) {
  event.preventDefault();
  const valorCasa = Number(inputs[0].value);
  const salario = Number(inputs[1].value);
  const ano = Number(inputs[2].value);

  calcular(valorCasa, salario, ano);
  form.style.display = `none`;
  div.querySelector('h3').innerText=`Checa os resultados!`;
}


function calcular(valorCasa, salario, ano) {
  const valor = valorCasa;
  const salarios = salario;
  const anos = ano;

  const   prestacao= (salarios * 0.3);
  const meses = anos * 12;
  const valorApgar  = valor / meses;
  verificar(valorApgar, prestacao)
}

function verificar(prestacao, valorApgar) {
  const arrayVerificar = [`A tua prestacao e de ${prestacao.toFixed(2)} e Menor que 30% do seu salario que e ${valorApgar} nao pode fazer o emprestimo`,
    `A tua prestacao e de ${prestacao.toFixed(2)} e Maior que 30% do seu salario que e ${valorApgar} parabens voce ganhou o emprestimo`,
    `A tua prestacao e de ${prestacao.toFixed(2)} e igual a 30% do seu salario que e ${valorApgar} parabens voce ganhou o emprestimo`
  ];

  if (prestacao > valorApgar) return respo.innerHTML = `<h2>${arrayVerificar[0]}</h2>`;
  if (valorApgar === prestacao) return respo.innerHTML = `<h2>${arrayVerificar[2]}</h2>`;
  if (prestacao < valorApgar) return respo.innerHTML = `<h2>${arrayVerificar[1]}</h2>`;
}
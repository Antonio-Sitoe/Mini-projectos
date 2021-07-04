// const anoNascimento = document.querySelector('[data-input]');
// const button = document.querySelector('[data-button]');

const nome = prompt('Dogite seu nome');
const sexo = prompt('Digite "F" se feminino e "M" se masculino');
let valor = Number(prompt('Digite o valor da compra'))
const resposta = document.querySelector('[data-resp]');
let i = valor;
if (sexo === 'F') {
    valor = valor * 0.13;
    valor = i - valor;
    resposta.innerText = `O desconto e de ${valor}`

} else if (sexo === 'M') {
    valor = valor * 0.05;
    valor = i - valor;
    resposta.innerText = `O desconto e de ${valor}`

}
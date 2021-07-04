const anoNascimento = document.querySelector('[data-input]');
const button = document.querySelector('[data-button]');
const resposta = document.querySelector('[data-resp]');


button.addEventListener('click', voto)
function voto() {
    let calculo = anoNascimento.value;
    if (calculo % 2 === 0)
        resposta.innerText = `NUmero Par`
    else
        resposta.innerText = `Numero impar`
}
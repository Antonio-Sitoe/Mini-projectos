const anoNascimento = document.querySelector('[data-input]');
const button = document.querySelector('[data-button]');
const resposta = document.querySelector('[data-resp]');


button.addEventListener('click', voto)
function voto() {
    let calculo = 2021 - anoNascimento.value;
    console.log(calculo)
    if (calculo > 18)
        resposta.innerText = `Pode votar `
    else
        resposta.innerText = `Nao Pode votar`
}
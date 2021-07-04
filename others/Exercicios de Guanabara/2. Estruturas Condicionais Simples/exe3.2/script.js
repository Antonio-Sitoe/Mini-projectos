const anoNascimento = document.querySelector('[data-input]');
const button = document.querySelector('[data-button]');
const resposta = document.querySelector('[data-resp]');

button.addEventListener('click', voto)
function voto() {
    let calculo = 2021 - anoNascimento.value;
    console.log(calculo)
    if (calculo > 18) {
        calculo = calculo - 18;
        resposta.innerText = `JA SE PASSARAM ${calculo} desde o alistamento `.toLowerCase()
    } else {
        calculo = 18 - calculo;
        resposta.innerText = `Faltam ${calculo} anos para o alistamento `.toLowerCase()
    }
}
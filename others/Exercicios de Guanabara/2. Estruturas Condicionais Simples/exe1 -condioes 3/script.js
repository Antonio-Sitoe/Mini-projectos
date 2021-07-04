const nota1 = document.querySelector('[data-input1]');
const nome = document.querySelector('[data-nome]');
const nota = document.querySelector('[data-input]');
const button = document.querySelector('[data-button]');
const resposta = document.querySelector('[data-resp]');


button.addEventListener('click', funcao)
function funcao() {

    const calculo = (+nota.value + (+nota1.value))/2
    if (calculo > 7)
        resposta.innerText = `o ${nome.value} Media ${calculo} teve bom aproveitamento `
    else
        resposta.innerText = `o ${nome.value} Media ${calculo} Nao teve bom aproveitamento `
}
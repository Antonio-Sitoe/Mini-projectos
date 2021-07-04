const nota1 = document.querySelector('[data-input1]');
const nome = document.querySelector('[data-nome]');
const nota = document.querySelector('[data-input]');
const button = document.querySelector('[data-button]');
const resposta = document.querySelector('[data-resp]');





button.addEventListener('click', () => {
    const calculo = (+nota.value + (+nota1.value)) / 2;

    if (calculo <= 4.9) {
        resposta.innerText = `Reprovado `
    } else if (calculo >= 5 && calculo <= 4.9) {
        resposta.innerText = `recuperacao`;
    } else if (calculo >= 7) {
        resposta.innerText = `APROVADO`
    }

})
const num = document.querySelector('[data-input1]');
const num2 = document.querySelector('[data-input]');
const button = document.querySelector('[data-button]');
const resp = document.querySelector('[data-resp]');

button.addEventListener('click', () => {

    if (num.value > num2.value) {
        resp.innerText = `O ${num.value} E maior`;
    } else if (num.value < num2.value) {
        resp.innerText = `o ${num2.value} E mair`
    } else {
        resp.innerText = `Sao iguais`
    }
})


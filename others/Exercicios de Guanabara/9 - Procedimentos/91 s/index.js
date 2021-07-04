const button = document.querySelector('#button');
const num1 = document.querySelector('#number1');
const num2 = document.querySelector('#number2');




button.addEventListener('click', function (e) {
    e.preventDefault()

    const res = document.getElementById('resp');

    const inputValue = +num1.value;

    const inputValue2 = +num2.value;

    if (inputValue === inputValue2) {
        res.innerText = `NUMEROS IGUAIS`;

    } else {

        res.innerText = `e maior ` + soma(inputValue, inputValue2);
    }
})

function soma(inputValue, inputValue2) {
    return Math.max(inputValue, inputValue2)
}
const button = document.querySelector('#button');
const num1 = document.querySelector('#number1');
const num2 = document.querySelector('#number2');








button.addEventListener('click', function (e) {
    e.preventDefault()

    const res = document.getElementById('resp');
    const inputValue = +num1.value;
    const inputValue2 = +num1.value;

    res.innerText = som(inputValue, inputValue2);
})


function som(a, b) {
    return a + b
}
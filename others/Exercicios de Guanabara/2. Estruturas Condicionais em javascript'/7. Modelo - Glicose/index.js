'use strict'


const input = document.querySelector('#text')
const resp = document.querySelector(".resp");



document.addEventListener('keyup', e => {

    const inputValue = +(input.value)
    if (e.keyCode === 13) {
        if (inputValue <= 100) {
            resp.innerText = 'Classificacao NORMAL'
        } else if (inputValue > 100 && inputValue <= 140) {
            resp.innerText = 'Classificacao ELEVADO'
        } else {
            resp.innerText = 'Classificacao DIABETES'
        }
    }
})
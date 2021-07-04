const button = document.querySelector('#button');
const res = document.getElementById('resp');






// 93) Faça um programa que tenha um procedimento chamado Contador() que recebe
// três valores como parâmetro: o início, o fim e o incremento de uma contagem.

//O
// programa principal deve solicitar a digitação desses valores e passá-los ao
// procedimento, que vai mostrar a contagem na tela.

function gerador(inicio, fim, inc) {
    while (inicio < fim) {

        console.log(inicio)

        inicio = inicio + inc;
    }
}

const inicio = document.querySelector('#inicio')
const fim = document.querySelector('#fim')
const inc = document.querySelector('#incrimento')



button.addEventListener('click', function (e) {
    e.preventDefault()

    let inicioValue = +inicio.value;
    let fimValue = +fim.value;
    let incValue = +inc.value;


    gerador(inicioValue, fimValue, incValue)

})
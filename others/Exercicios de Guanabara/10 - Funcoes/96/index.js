const button = document.querySelector('#button');
const res = document.getElementById('resp');





// ) Crie um programa que tenha uma função Media(), 

function media(a, b) {
    const array = [a, b];
    console.log(array)

    const reduce = array.reduce((acum, item, Arrray) => {
        return acum + item;
    }, 0)


    return reduce / array.length;

}

//que vai receber as 2 notas de
// um aluno e retornar a sua média para o programa principal1


const nota1 = document.querySelector('#inicio')
const nota2 = document.querySelector('#fim')



button.addEventListener('click', function (e) {
    e.preventDefault()

    let inicioValue = +nota1.value;
    let fimValue = +nota2.value;


    res.innerHTML = media(inicioValue, fimValue)+"<br>";
    res.innerText += situacao(inicioValue, fimValue);

})


// 96) Crie um programa que tenha uma função Media(), que vai receber as 2 notas de
// um aluno e retornar a sua média para o programa principal.

// 100) Melhore o exercício 96, criando além da função Media() uma outra função

function situacao(inicioValue, fimValue) {
    const midea = media(inicioValue, fimValue);
    const resposta = ['Reprovado ou recuperacao', 'Excluio', 'Despensado', 'Aprovado Para o exame']
    if (midea >= 14.5) return resposta[2];
    if (midea >= 10) return resposta[3];
    if (midea >= 6) return resposta[0];
    if (midea < 6) return resposta[1];

}
// chamada Situacao(), que vai retornar para o programa principal se o aluno está
// APROVADO, em RECUPERAÇÃO ou REPROVADO. Essa nova função, vai receber como
// parâmetro o resultado retornado pela função Media().
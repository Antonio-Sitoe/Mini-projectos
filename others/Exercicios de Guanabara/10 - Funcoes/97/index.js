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


    res.innerText = media(inicioValue, fimValue);

})
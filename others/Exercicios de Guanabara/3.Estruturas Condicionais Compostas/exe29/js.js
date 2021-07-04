const anos = document.querySelector('[data-anos]');
const nome = document.querySelector('[data-nome]');
const salario = document.querySelector('[data-salario]');
const button = document.querySelector('[data-button]');
const resp = document.querySelector('[data-resp]');


button.addEventListener('click', () => {
    let sal = +salario.value;

    let calculo;

    if (anos.value < 3) {
        calculo = (sal * 0.03);
        calculo += sal;


        resp.innerText = `O Novo salario do senhor ${nome.value} e de ${calculo}`;
    } else if ((+anos.value >= 3) && (+anos.value < 10)) {
        calculo = sal * 0.125
        calculo += sal;
        resp.innerText = `O Novo salario do senhor ${nome.value} e de ${calculo}`;
    } else  if(+anos.value >= 10){

        calculo = sal * 0.2;;
        calculo+=sal;
        resp.innerText = `O Novo salario do senhor ${nome.value} e de ${calculo}`;
    }
})


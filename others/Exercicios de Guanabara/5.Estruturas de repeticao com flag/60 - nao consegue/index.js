let i = 's';
let pessoaMaisVelha;
let pessoaMaisVelhaNome;




while (i === 's') {

    let nome = prompt("Digite o seu nome");
    let idade = +(prompt("Digite a sua idade"));
    let sexo = prompt('Digite o seu sexo em f e m');

    pessoaMaisVelha=idade;

    if(idade > pessoaMaisVelha){
        pessoaMaisVelhaNome = nome
    }

   

    i = prompt('quer continuar s ou n')
}






console.log('PESSOA MAIS VELHA', pessoaMaisVelhaNome)
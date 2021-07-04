//Faça um programa usando a estrutura “faça enquanto” que leia a idade de
// várias pessoas. 

//A cada laço, você deverá perguntar para o usuário se ele quer ou
// não continuar a digitar dados. No final, quando o usuário decidir parar, mostre
// na tela:


// a) Quantas idades foram digitadas
// b) Qual é a média entre as idades digitadas
// c) Quantas pessoas tem 21 anos ou mais.
let i = 0;
let media =0;
let array = [];
let pessoa = 0;
let continuar = 's';
do {
    let idade = +(prompt('Digite a sua idade'))
    media += idade;
    array.push(idade)

    i++;
    continuar = prompt('quer continuar s ou n')

   
} while (continuar === 's')


for (let idade of array) {
    if (idade >= 21) {
        pessoa++
    }
}


media = media / i;


console.log('Idades digitadas', i)
console.log('Media', (media / i))
console.log('Pessoas com ou mais de 21', pessoa)
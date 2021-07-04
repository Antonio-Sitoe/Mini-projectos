//Faça um programa usando a estrutura “faça enquanto” que leia a idade de
// várias pessoas. 

//A cada laço, você deverá perguntar para o usuário se ele quer ou
// não continuar a digitar dados. No final, quando o usuário decidir parar, mostre
// na tela:


// a) Quantas idades foram digitadas
// b) Qual é a média entre as idades digitadas
// c) Quantas pessoas tem 21 anos ou mais.
let continuar = 's';
let soma = 0;
let array = [];
let menor = 0;
let media = 0;
let pares = 0;




do {
    let num = +(prompt("Digite um numero"));
    soma += num;
    menor = num;

    array.push(num)

    continuar = prompt('Quer continuar s ou n')

} while (continuar === 's');

for (let num of array) {
    if (num <= menor) {
        menor = num;
    }
    if (num % 2 === 0) {
        pares++;
    }
}

media = soma / array.length;



console.log('somatorio', soma)
console.log('Menor valor', menor)
console.log('Media', media)
console.log('Pares', pares)
// //Crie um programa que leia sexo e peso de 8 pessoas, usando a estrutura
// “para”. No final, mostre na tela:
// a) Quantas mulheres foram cadastradas
// b) Quantos homens pesam mais de 100Kg
// c) A média de peso entre as mulheres
// d) O maior peso entre os homens

let mulheres = 0;
let homes = 0;
let mediaPeso = 0;
let maiorPEso = [];


for (let i = 0; i <= 8; i++) {
    let peso = +(prompt('digite o teu peso'))
    let sexo = +(prompt('digite o teu sexo f ou m'))

    if (sexo === 'f') {
        mulheres++;
        mediaPeso += peso;
    }
    if (sexo === 'm') {
        maiorPEso.push(peso)
        homes = peso > 100 ? homes++ : homes;
    }

}


let psao = maiorPEso[0];
for (let peso of maiorPEso) {
    if (peso > psao) {
        psao = peso
    }
}


mediaPeso = mediaPeso / mulheres

console.log('Mulheres sao, ', mulheres)
console.log('Homens pesam +100kg, ', homes)

console.log('Media do peso das mulheres ', mediaPeso)

console.log('maior peso', psao)
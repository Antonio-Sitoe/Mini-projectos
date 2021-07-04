const array = [];
for (let i = 0; i < 10; i++) {
    const idade = +(prompt("Digite  SuA IDADE"))
    array.push(idade);
}

let media = 0;
let mais18anos = 0;
let menos5anos = 0;
let maiorIdade = array[0];

for (const i of array) {

    media += i;
    if (i < 5) {
        menos5anos++;
    }
    if (i > 18) {
        mais18anos++;
    }

    if (maiorIdade <= i) {
        maiorIdade = i;
    }
}
console.log(array)
console.log('media', media)
console.log('mais 18 anos :', mais18anos)
console.log('menos 5 anos :', menos5anos)
console.log('maior Idade :', maiorIdade)
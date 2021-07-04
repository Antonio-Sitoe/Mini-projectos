let idades = [];
let sexos = [];
let homens = 0;
let media=0;
let n = 0;
let mulherNova;
let continuar = 's';

while (continuar === 's') {
    const sexo = prompt("Digite o seu sexo em 'f' e 'm' ")
    const idade = +(prompt("Digite a idade"))

    if (sexo === 'f') {
        mulherNova = idade;
    } else if (sexo === 'm') {
        media += idade;
        n++;
    }

    idades.push(idade);
    sexos.push(sexo)

    continuar = prompt('quer continuar? sim sim digite "s" se nao digite "n"');
}

let maior = idades[0];
idades.map((num) => {
    if (num >= maior) maior = num
});



for (let i of sexos) {
    if (i === 'm') {
        homens++
    }
}

//  m 15
//  m 12
//  m 20

// f 10
// f 25

console.log('Maior idade lida  ', maior)
console.log('Foram cadastrados ', homens, ' Homns')

console.log('idade da muler mais nova ', mulherNova)

console.log('Media das idades', media / n)
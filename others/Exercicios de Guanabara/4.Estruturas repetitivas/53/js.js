let idade, sexo

let h = 0,
    f = 0;

let media = 0,
    mediaHomens = 0,
    i = 0;
while (i < 5) {
    idade = +(prompt('DIGITE A SUA IDADE '))
    sexo = prompt('DIGITE O SEU SEXO COM "f" E "h');

    media += idade

    genero(sexo)

    i++
}


function genero(sexo, idade) {
    if (sexo === 'h') {
        mediaHomens++
        return h++
    }
    if (sexo === 'f') {
        mulhers(idade)
        return f++;
    }
}

function mulhers(idade) {
    if (idade > 20) maiorVinte++
    return maiorVinte
}


function mediaGrupo() {
    return media / 5;
}

function idadeHomens() {
    return mediaHomens / h;
}


console.log('HOMENS ', h)
console.log('MULHERES ', f)

console.log('MEDIA DO GRUPO ', mediaGrupo())
console.log('MEDIA DOS HOMES ', idadeHomens())
console.log('MULHERES COM MAIS DE 20 ', mulhers(idade))
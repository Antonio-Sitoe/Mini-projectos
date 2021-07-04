let i = 0;
let pessoasPeso = 0,
    menos = 0,
    media = 0,
    d = 0;


while (i < 7) {

    const peso = +(prompt('Digite o peso'));
    const altura = +(prompt('Digite o altura'));

    media += altura;
    pesamMais(peso)
    pesamMenos(peso, altura)
    i++
}

function mediaAltura() {
    const calc = media / 7
    return calc;
}

function pesamMais(peso) {
    const pesoMaior = peso > 90 ? pessoasPeso++ : 0
    return pesoMaior;
}

function pesamMenos(peso, altura) {
    if (peso < 50 && altura < 1.60) {
        menos++
    }

    if (peso > 100 && altura > 1.90) {
        d++
    }
}



console.log('a) ', mediaAltura().toFixed(2))
console.log('b) ', pessoasPeso)
console.log('c) ', menos)
console.log('d) ', d)
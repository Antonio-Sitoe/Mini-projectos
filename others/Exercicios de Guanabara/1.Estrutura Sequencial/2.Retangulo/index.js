const base = +(prompt("Digite o valor da base do retangulo")),
    altura = +(prompt("Digite a altura do retangulo"));
const area = (base * altura);
const per = (base * 2) + (altura * 2);

const diagonal = Math.sqrt((base * base) + (altura * altura));

console.log('Area do retangulo', area.toFixed(2));
console.log('Perimetro de um retangulo', per.toFixed(2));
console.log("Diagonal de um retangulo", diagonal)
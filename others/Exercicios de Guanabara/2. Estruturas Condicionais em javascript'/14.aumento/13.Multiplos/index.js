const salario = +(prompt("Digite o salaro da pessoa"))

let nvSalario;
let aumento;
let perc;

if (salario <= 1000) {
    aumento = salario * 0.20
    nvSalario = salario + aumento
    perc = 20

} else if (salario > 1000 && salario <= 3000) {
    aumento = salario * 0.15
    nvSalario = salario + aumento
    perc = 15;

} else if (salario > 3000 && salario <= 8000) {
    aumento = salario * 0.10;
    nvSalario = salario + aumento
    perc = 10
} else if (salario > 8000) {
    aumento = salario * 0.05
    nvSalario = salario + aumento
    perc = 5

}

console.log('Novo salario', nvSalario.toFixed(2))
console.log('Aumento', aumento.toFixed(2))
console.log('Percentagem ' + perc + '%')
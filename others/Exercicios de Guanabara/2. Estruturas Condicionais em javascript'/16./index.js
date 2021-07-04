const inicio = +(prompt('DIGITE O INICIO DO JOGO'));
const fim = +(prompt('DIGITE O FIM DO JOGO'));
let cal;
if (inicio > fim) {
    cal = 24 - inicio + fim
} else if (fim > inicio) {
    cal = fim - inicio
} else if (inicio === fim) {
    cal = 24 - inicio - fim;
}

console.log(cal)
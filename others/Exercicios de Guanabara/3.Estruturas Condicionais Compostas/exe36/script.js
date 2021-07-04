const horas = Number(prompt('Quantas horas de actividade uma pessoa teve por mes?'))

function calcular() {
    const taxa = 0.05;
    let pontos;
    let resultado;
    if (horas <= 10) {
        pontos = 2 * horas;
    } else if (horas > 10 && horas <= 20) {
        pontos = 5 * horas;
    } else if (horas > 20) {
        pontos = 10 * horas
    }
    resultado = pontos * taxa;
    return resultado;
}


console.log(calcular())
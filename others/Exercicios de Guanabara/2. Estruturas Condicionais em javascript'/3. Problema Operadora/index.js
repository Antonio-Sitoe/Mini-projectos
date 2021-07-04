// Problema "operadora"
// Uma operadora de telefonia
// [] cobra R$ 50.00 por um plano básico que dá direito a 100 minutos de
// telefone. 
//Cada minuto que exceder a franquia de 100 minutos custa R$ 2.00.


//Fazer um programa para
// ler a quantidade de minutos que uma pessoa consumiu, daí mostrar o valor a ser pago

let qt = +(prompt('digte a quantidade de minutos ?'));

const pagar = () => {
    if (qt <= 100) {
        return 50
    }
    if (qt > 100) {
        qt = qt - 100
        qt = qt * 2
    }
    return 50 + qt
}
console.log('o VALOR A PAGAR', pagar())
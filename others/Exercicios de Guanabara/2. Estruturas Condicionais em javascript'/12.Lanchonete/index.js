/*


Uma lanchonete possui vários produtos. Cada produto possui um código
e um preço. Você deve fazer um programa para ler o código e a
quantidade comprada de um produto (suponha um código válido), e daí
informar qual o valor a ser pago, com duas casas decimais, conforme
tabela de produtos ao lado.


*/


const codigo = +(prompt("Digite um codico para o produto valido de 1 ate 5"));
const qt = +(prompt("Digite qunatidade do produto"))
let vp = 0;

switch (codigo) {
    case 1:
        vp = qt * 5
        break

    case 2:
        vp = qt * 3.5
        break

    case 3:
        vp = qt * 4.80
        break

    case 4:
        vp = qt * 8.90
        break

    case 5:
        vp = qt * 7.32
        break
    default:
        break;
}


console.log("Valor a pagar ", vp.toFixed(2))
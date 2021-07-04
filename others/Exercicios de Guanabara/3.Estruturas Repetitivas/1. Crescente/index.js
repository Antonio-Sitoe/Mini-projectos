//  Leia uma quantidade indeterminada de duplas de valores inteiros X e Y. /////    Escreva para cada X e Y uma mensagem que indique se estes valores foram digitados em ordem crescente ou decrescente. 
//O programa deve finalizar quando forem digitados dois valores iguais.

let x = 0;
let y = 1;

while (x !== y) {
    x = +(prompt("Digite  um numeros"))
    y = +(prompt('Digite outro numero'))

    if (x > y) {
        console.log("DECRESCENTE")
    } else if (x < y) {
        console.log('CRECENTE')
    }

}
("Digite dois numeros")
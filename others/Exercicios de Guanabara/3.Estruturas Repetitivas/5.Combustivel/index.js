//  || ler o tipo de combustivel  
//  ||   alcool
//  ||  gasolina
//  ||  diesel
//  ||  
//  |x|  
//  |x|  

let codigo = 0;
let alcool = 0;
let gasolina = 0
let diesl = 0
while (codigo !== 4) {
    codigo = +(prompt("Informe um codigo (1,2,3) ou 4  para parar"))

    switch (codigo) {
        case 1:
            alcool++
            break;
        case 2:
            gasolina++

            break;
        case 3:
            diesl++

            break;
        case 4:
            console.log("MUITO OBRIGADO")
            break;
    }
}

console.log("Alcool: ",alcool )
console.log("Gasolina: ",gasolina )
console.log("Diesel: ",diesl )
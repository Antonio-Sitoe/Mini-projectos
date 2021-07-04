let primeiroNumero = Number(prompt("Digite um numero 1"))
let segundoNumero = Number(prompt("Digite um numero 2"))
const conjunto = []

while (primeiroNumero <= segundoNumero) {
    conjunto.push(primeiroNumero)
    primeiroNumero++
}


const somador = conjunto.reduce((acumu, valorActual)=>{
    return acumu + valorActual;
},0)

console.log("resultado", somador)

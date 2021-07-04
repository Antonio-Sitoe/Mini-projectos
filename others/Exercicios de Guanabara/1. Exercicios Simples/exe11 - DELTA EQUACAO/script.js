const a = Number(prompt('Digite o valor de A'))
const b = Number(prompt('Digite o valor de B'))
const c = Number(prompt('Digite o valor de C'))


const delta = b ** 2 - 4 * a * c;
const raiz = Math.sqrt(delta)
console.log('Delta ' + delta)

if(delta > 0){
    const x1 = (-b + raiz) / 2 * a
    const x2 = (-b - raiz) / 2 * a
    
  
    console.log('RaizQ ' + raiz)
    console.log("X1 " + x1)
    console.log("X2 " + x2)
}else{
    console.log('RESULTADO NEGATIVO')
}



const pu = +(prompt("Digite o preco unitario"));
const qt = +(prompt("Digite a quantidade"));
const dr = +(prompt("Digite o dinheiro recebido"));
const troco = dr - (pu * qt)

if (troco < 0) {
    console.log('dinheiro insufciente faltam ' + (-troco) + ' mt')
}else{
    console.log('TRoco = ', troco)
}
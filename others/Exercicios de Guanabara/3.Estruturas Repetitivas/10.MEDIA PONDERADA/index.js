//Maria acabou de iniciar seu curso de graduação na faculdade de medicina e precisa de sua ajuda para organizar os experimentos de um laboratório o qual ela é responsável.

//Ela quer saber no final do ano, 

//[] quantas cobaias foram utilizadas no laboratório e o percentual de cada tipo de cobaia utilizada. 


//Este laboratório  em  especial  utiliza  três  tipos  de  cobaias: 

//   sapos,  
//  ratos  e  
//  coelhos.  

//Para  obter  estas informações, ela sabe exatamente o número de experimentos que foram realizados, o tipo de cobaia utilizada e a quantidade de cobaias utilizadas em cada experimento.

//Faça um programa que leia um valor inteiro N que indica os vários casos de teste que vem a seguir. 

const n = +(prompt('Quantos casos de teste serao digitados'));
let total = 0;
let totalCoelhos = 0;
let totalSapos = 0;
let totalRatos = 0;


for (let i = 0; i < n; i++) {
    let qt = +(prompt("Qunatidade de cobaias"))
    let type = prompt("Tipo de cobaias")
    total += qt
    switch (type) {
        case 'C':
            totalCoelhos += qt
            break;
        case 'S':
            totalSapos += qt

            break;
        case 'R':
            totalRatos += qt
            break;
    }
}

const percCoelhos = () => {
    return ((totalCoelhos * 100) / total).toFixed(2)
}
const percSapos = () => {
    return ((totalRatos * 100) / total).toFixed(2)
}
const percRats = () => {
    return ((totalSapos * 100) / total).toFixed(2)
}

//Cada caso de teste contém um inteiro que representa a quantidade de cobaias utilizadas e uma letra('C', 'R' ou 'S'), 

console.log('RELARORIO FINAL :')
console.log('TOTAL :', total)
console.log('TOTAL COELHOS :', totalCoelhos)
console.log('TOTAL RATOS :', totalRatos)
console.log('TOTAL SAPOS :', totalSapos)
console.log('PERCENTUAL DE COELHOS :', Number(percCoelhos()))
console.log('PERCENTUAL DE SAPOS :', Number(percSapos()))
console.log('PERCENTUAL DE SAPOS :', Number(percRats()))

//indicando o tipo de cobaia(R: Rato S: Sapo C: Coelho).Apresente o total de cobaias utilizadas, o total de cada tipo de cobaia utilizada e o percentual de cada uma em relação ao total de cobaias utilizadas, sendo que o percentual deve ser apresentado com dois dígitos após o ponto.
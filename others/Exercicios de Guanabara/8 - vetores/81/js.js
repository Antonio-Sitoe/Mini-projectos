 let vetor = [];
 let quantas = 0;

 for (let i = 0; i < 30; i++) {
   const numero = Math.floor(Math.random() * 15);
   vetor.push(numero);
 }

 const nume = +(prompt("Digite um numero"))

 console.log(vetor)
 vetor.map((num, indice) => {
   if (num === nume) {
     quantas++
     console.log(`${num} esta na posicao ${indice}`)
   }
 });
 console.log('A chave foi sorteada', quantas, ' vezes')
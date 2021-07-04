const n = +(prompt("quantos numeros vai digitar ?"))
let dentro = 0;
let fora = 0;

for (let i = 0; i < n; i++) {
    const number = +(prompt("Digite um numero"))
    if (number >= 10 && number < 20) {
        dentro++
    } else {
        fora++
    }
}

console.log("dentro ", dentro)
console.log("fora ", fora)
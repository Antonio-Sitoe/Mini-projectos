let vetor = [];
let num = 0;
for (let i = 0; i <= 9; i++) {
    vetor.push(num)
    num = num + 5;
}

for (let i of vetor) {
    console.log(i)
}

console.log(vetor)
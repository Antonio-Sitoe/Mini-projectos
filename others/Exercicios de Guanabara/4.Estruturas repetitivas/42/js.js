let i = 30;
let min = 0;
while (i >= 0) {
        const verificar = i % 4 === 0 ? `[${i}]` : i;
        console.log(verificar)
        i--;
}
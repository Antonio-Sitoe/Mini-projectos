let idade = 0;
const list = [];

while (idade >= 0) {
    idade = +(prompt("Digite as idades"));
    if (idade > 0) {
        list.push(idade)
    }
}

const media = list.reduce((ac, item, index, array) => {
    if (item < 0) {
        return "IMPOSSIVEL CALCULAR";
    } else {
        ac += item;
        if (index === (array.length - 1)) {
            ac = ac / array.length;
        }
        return ac
    }
}, 0)
console.log('Media = ', media.toFixed(2))
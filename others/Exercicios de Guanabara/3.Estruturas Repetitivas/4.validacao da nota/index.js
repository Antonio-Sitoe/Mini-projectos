let nota1 = +(prompt("Digite a primeira nota"));
while (nota1 < 0 || nota1 > 10) {
    nota1 = +(prompt("Digite a primeira nota outra vez"))
}
let nota2 = +(prompt("Digite a segunda nota"));

while (nota2 < 0 || nota2 > 10) {
    nota2 = +(prompt("Digite a segunda nota outra vez"))
}

let media = (nota1 + nota2) / 2

console.log(media)
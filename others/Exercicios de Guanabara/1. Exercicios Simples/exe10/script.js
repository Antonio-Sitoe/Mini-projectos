const altura = Number(prompt('Digite a altura'))
const largura = Number(prompt('Digite a larguraa'))

const area = altura * largura;
const cadalitro = 2
const quantidadeTinta = area / cadalitro;


document.write(`A area pintada e de ${area}metros qudrados<br>`)
document.write(`A quantidade de tinta e de ${quantidadeTinta}/litro<br>`)


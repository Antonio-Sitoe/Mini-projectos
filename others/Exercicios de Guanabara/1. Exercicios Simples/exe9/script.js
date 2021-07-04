const dinheiroCarteira = Number(prompt('Digite o quanto tens na carteira'))

const ValorDollar = 55.56;

const conversao = dinheiroCarteira/ValorDollar;

document.write(`Com esse valor voce pode obter ${conversao.toFixed(2)} dollares`)
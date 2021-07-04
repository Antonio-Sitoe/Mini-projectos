

const lista = ['20', '30', '7', '8']
const mapista = lista.map((item) => {
    return Number(item)
})

const li = mapista.reduce((acumulador, actual) => {
    return acumulador < actual ? actual : acumulador
})

console.log(li)
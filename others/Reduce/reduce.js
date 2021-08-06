const numeros = [40, 200, 50, 50, 60, 50, 50, 500, 1_000];

// calculo de valor total do array
const total = numeros.reduce((acumulador, itemActual, index, array) => {
  return acumulador + itemActual;
}, 0);

console.log("Total: ", total);

// calculo de media com reduce

const media = numeros.reduce((acumulador, itemActual, index, array) => {
  acumulador += itemActual;
  if (index === array.length - 1) {
    acumulador /= array.length;
  }
  return acumulador;
}, 0);

console.log("media :", media.toFixed(2));

// simluando  map
const map = numeros.reduce((ac, it, i, ar) => {
  ac.push(it * 2);
  return ac;
}, []);

console.log("Map ->", map);

// simulando filter

const filter = numeros.reduce((ac, it, i, ar) => {
  if (it > 50) ac.push(it);
  return ac;
}, []);

console.log("filter ->", filter);

// flatmap
const matriz = [
  [2, 3, 4],
  [8, 2, 10],
  [50, 40, 10],
];

// funciona como spread
const flatMap = matriz.flatMap((item) => {
  return item;
});

console.log(flatMap);

const dados = [
  {
    id: "001",
    nome: "Antonio",
    cidade: "MAchava",
    filme: "cidade santa",
  },
  {
    id: "002",
    nome: "Antonio",
    cidade: "MAchava",
    filme: "cidade santa",
  },
  {
    id: "003",
    nome: "Antonio",
    cidade: "MAchava",
    filme: "cidade santa",
  },
  {
    id: "004",
    nome: "Antonio",
    cidade: "MAchava",
    filme: "cidade santa",
  },
];

const normalizar = new Map();

for (let n of dados) {
  let { id } = n;
  normalizar.set(id, n);
}
console.log(normalizar[2]);

const it = dados.reduce((ac, it, i, arr) => {
  ac[it.id] = it;
  return ac;
}, {});

console.log(it['003']);

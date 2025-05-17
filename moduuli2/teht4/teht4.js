let numerot = [];
let numero

do {
  numero = parseInt(prompt(`give me a number 0`));
  numerot.push(numero);
}while (numero !== 0)


numerot.sort((a, b) => b - a)
console.log(numerot);


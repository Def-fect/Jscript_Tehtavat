function concat(jutut) {
    return jutut.reduce((a, b) => a + b, "");
}
const lista = ["Johnny", "DeeDee", "Joey", "Marky"];

const yhdistelma = concat(lista);
document.getElementById("list").textContent = yhdistelma;

console.log(yhdistelma);
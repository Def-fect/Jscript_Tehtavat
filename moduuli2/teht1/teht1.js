numerot=[]

let i = 0;
do {
 let kysely = Number(prompt("ANNA 5 numeroa"))
  numerot.push(kysely)
  i += 1;
} while (i < 5);

console.log("Numbers in reverse order:");
for (let j = numerot.length - 1; j >= 0; j--) {
    console.log(numerot[j]);
}

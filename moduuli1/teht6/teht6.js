const answer = confirm('Should I calculate the square root?');

if (answer === true) {
  const numero = Number(prompt('Anna numero jonka halutaan kertaa'));
  if (numero >= 0) {
    console.log(Math.sqrt(numero));
  } else {
    console.log('The square root of a negative number is not defined');
  }}





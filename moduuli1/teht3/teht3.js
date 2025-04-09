const number1 = parseInt(prompt('give first number'));
const number2 = parseInt(prompt('give second number'));
const number3 = parseInt(prompt('give third number'));
let sum = number1 + number2 + number3;
let average =(number1 + number2 + number3)/3 ;
let product = number1 * number2 * number3;
document.querySelector('#target').innerHTML = 'Sum is:  ' + sum + ' Average is:  ' + Math.round(average) + '  Product is:  ' + product;
console.log(sum);
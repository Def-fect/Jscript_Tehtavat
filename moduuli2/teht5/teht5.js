let numbers = [];

while (true) {
  const number = parseInt(
      prompt(`give me a numba that isnt duplicate or Iwill stop`));
  if (numbers.includes(number)){
    break
  }
  numbers.push(number)
}

numbers.sort()
console.log(numbers);
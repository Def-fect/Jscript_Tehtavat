const vuosi = parseInt(prompt('anna vuosiluku, onko se'));

if (vuosi /= 4 ) {
  console.log('The number is positive.');
} else if (number < 0) {
  console.log('The number is negative.');
} else {
  console.log('That number is zero.');
}

console.log(vastaus);



num = int(input("Anna luku"))

if num > 1:
    for i in range(2, (num // 2) + 1):
        if (num % i) == 0:
            print(num, "ei ole alkuluku")
            break
    else:
        print(num, "luku on alkuuku")
else:
    print(num, "ei ole alkuluku")
function kunnes6() {
  const lista = [];
  do {
    lista.push(Math.ceil(Math.random() * 6));
  } while (!lista.includes(6));

  const ul = document.getElementById('lista');
  lista.forEach(x => {
    const liElement = document.createElement('li');
    liElement.textContent = x;
    ul.appendChild(liElement);
  });

  console.log(lista);
}

kunnes6();
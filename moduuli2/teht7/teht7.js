const maxluku = parseInt(prompt('give numba that rolling dce will have'));

function kunnes6() {

  const lista = [];
  do {
    lista.push(Math.ceil(Math.random() * maxluku));
  } while (!lista.includes(maxluku));

  const ul = document.getElementById('lista');
  lista.forEach(j => {
    const liElement = document.createElement('li');
    liElement.textContent = j;
    ul.appendChild(liElement);
  });

  console.log(lista);
}

kunnes6();
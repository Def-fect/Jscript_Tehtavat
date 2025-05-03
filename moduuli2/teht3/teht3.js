
const koirat = [];

for (let i = 0; i < 6; i++) {
  const name = prompt(`Enter name for dog ${i + 1}:`);
  if (name && name.trim() !== '') {
    koirat.push(name.trim());
  }
}

koirat.sort((b, a) => a.localeCompare(b));


const ul = document.getElementById('lista');
koirat.forEach(participant => {
  const liElement = document.createElement('li');
  liElement.textContent = participant;
  ul.appendChild(liElement);
});
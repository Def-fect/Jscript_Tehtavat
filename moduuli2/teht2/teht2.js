const lasku = parseInt(prompt('Enter the number of participants:'));

const ihmiset = [];

for (let i = 0; i < lasku; i++) {
  const name = prompt(`Enter name for participant ${i + 1}:`);
    ihmiset.push(name.trim())
}


ihmiset.sort((a, b) => a.localeCompare(b));


const ol = document.getElementById('lista');
ihmiset.forEach(participant => {
  const liElement = document.createElement('li');
  liElement.textContent = participant;
  ol.appendChild(liElement);
});
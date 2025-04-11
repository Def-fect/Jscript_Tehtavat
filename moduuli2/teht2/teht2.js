ihmislista = [];

const getCandidatesCount = () =>
    Number(prompt('kuinka monta tyyppia'))

const numberOfCandidates =getCandidatesCount()

const setCandidateData = (number) => {
  for (let i = 0; i < number; i++) {
    const name = prompt('Name for candidate' + (i + 1));

    ihmislista.push({name: name});
  }
}

setCandidateData(numberOfCandidates)


ihmislista.sort((a, b) => a.name.localeCompare(b.name));


document.querySelector('#target').innerText = 'Good morning, ' + ihmislista + '!';
    const ol = document.createElement('ol');

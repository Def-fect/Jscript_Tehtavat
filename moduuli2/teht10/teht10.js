const votes =[]


const getCandidatesCount = () =>
    Number(prompt('kuinka monta tyyppia'))

const numberOfCandidates =getCandidatesCount()

console.log("numberOfCandidates", numberOfCandidates)

const setCandidateData = (number) => {
  for (let i = 0; i < number; i++) {
    const name = prompt('Name for candidate' + (i + 1));
    //const name =prompt(`Name for candidate ${i+1}`)
    //votes.push({name, vote :0})
    votes.push({name: name, votes: 0});
  }
}

setCandidateData(numberOfCandidates);
console.log('votes', votes);

const addVOte = (i) => {
  votes[i].votes += 100;
}

addVOte(0)
votes.sort((a,b) => b.votes - a.votes)
const ul = document.querySelector("ul#root")
//const = document.getElementById("root")

let k =0;
while (k < votes.length) {
  const vote = votes[k]
  //const {name, votes} = votes[k]
  console.log(`Arvo indeksissa ${k}`, votes[k])
  const li =document.createElement("li")

  li.innerText = `Nimi:  ${vote.name}, votes: ${vote.votes}`

  k++;
}
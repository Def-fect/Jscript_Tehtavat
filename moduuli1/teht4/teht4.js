const name = prompt('Type your name.');

randnum = Math.ceil(Math.random() * 4);

switch (randnum) {
  case 1:
    document.querySelector('#target').innerHTML = name + 'you are Ravenclaw. ';
    break;
  case 2:
    document.querySelector('#target').innerHTML = name + 'you are Gryffindor . ';
    break;
  case 3:
    document.querySelector('#target').innerHTML = name + 'you are Slytherin . ';
    break;
  case 4:
    document.querySelector('#target').innerHTML = name + ' you are Hufflepuff. ';
    break;

}
const vuosi = parseInt(prompt('anna vuosiluku, onko se'));

if ((vuosi % 400 === 0) && (vuosi % 100 === 0) ) {
  console.log('luku '+ vuosi +' on karkausvuosi');
} else if ((vuosi % 4 === 0) && (vuosi % 100 != 0)) {
  console.log('luku '+ vuosi +' on karkausvuosi');
} else {
  console.log('luku '+ vuosi +' ei ole karkausvuosi');
}







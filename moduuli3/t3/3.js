'use strict';
const names = ['John', 'Paul', 'Jones'];

const target = document.getElementById('target');


let sting = '';
for (const name of names) {
  sting += `<li>${name}</li>`;
}

target.innerHTML = sting;
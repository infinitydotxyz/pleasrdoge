import html from './main.html';

const myDiv = document.createElement('div');

myDiv.id = 'div_id';

myDiv.innerHTML = html;

document.body.appendChild(myDiv);

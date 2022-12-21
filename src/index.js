import './style.css';

const contentDiv = document.querySelector('.content');
const testH1 = document.createElement('h1');
testH1.textContent = 'Hello world ... test from index.js';
contentDiv.appendChild(testH1);
// document.body.appendChild(createToDO());

import './style.css';

function component() {
    let element = document.createElement('div');
  
    element.innerHTML = "Hello this is without express";
    element.classList.add('hello');
  
    return element;
  }
  
  document.body.appendChild(component());
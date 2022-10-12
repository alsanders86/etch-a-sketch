const lilDiv = document.createElement('div');

const container = document.querySelector('.container');

lilDiv.setAttribute('style', 'color: white; background: blue');
lilDiv.textContent = "hello there";

container.appendChild(lilDiv);
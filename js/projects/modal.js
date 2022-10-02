const projectBox = document.querySelector('.project-box');
const background = document.querySelector('.background');
const closeBtn = document.querySelector('.close-btn');
const modal = document.querySelector('.modal');

// Show Modal and Background
projectBox.addEventListener('click', () => {
  modal.classList.add('db');
  background.classList.add('db');
})

// Hide Modal and Background
closeBtn.addEventListener('click', () => {
  modal.classList.remove('db');
  background.classList.remove('db');
})

background.addEventListener('click', () => {
  modal.classList.remove('db');
  background.classList.remove('db');
})
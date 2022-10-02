const projectBoxes = document.querySelectorAll('.project-box');
const closeBtns = document.querySelectorAll('.close-btn');
const background = document.querySelector('.background');
const modals = document.querySelectorAll('.modal');

// Show Modal and Background
projectBoxes.forEach((box) => {
  box.addEventListener('click', () => {
    let modalID = box.getAttribute('data-modal');
    let modal = document.getElementById(modalID);
    modal.classList.add('db');
    background.classList.add('db');
  });
});

// Hide Modal and Background
closeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    let modal = (btn.closest('.modal'));
    modal.classList.remove('db');
    background.classList.remove('db');
  });
});

// Outside Click
background.addEventListener('click', () => {
  modals.forEach((modal) => {
    modal.classList.remove('db');
  });
  background.classList.remove('db');
});
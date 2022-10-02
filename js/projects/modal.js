const projectBoxes = document.querySelectorAll('.project-box');
const closeBtns = document.querySelectorAll('.close-btn');
const background = document.querySelector('.background');
const modals = document.querySelectorAll('.modal');
const body = document.querySelector('body');

// Show Modal and Background
projectBoxes.forEach((box) => {
  box.addEventListener('click', () => {
    let modalID = box.getAttribute('data-modal');
    let modal = document.getElementById(modalID);
    modal.classList.add('db');
    background.classList.add('db');
    body.classList.add('modal-open');
  });
});

// Hide Modal and Background
closeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    let modal = (btn.closest('.modal'));
    modal.classList.remove('db');
    background.classList.remove('db');
    body.classList.remove('modal-open');
  });
});

// Outside Click
background.addEventListener('click', () => {
  modals.forEach((modal) => {
    modal.classList.remove('db');
  });
  background.classList.remove('db');
  body.classList.remove('modal-open');
});
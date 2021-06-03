const modal = document.querySelector('.modal');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const closeButton = document.querySelector('.modal-container__close');

button1.addEventListener('click', () => {
    modal.classList.add('visible');
    modal.classList.remove('hidden');
})

button2.addEventListener('click', () => {
    modal.classList.add('visible');
    modal.classList.remove('hidden');
})

button3.addEventListener('click', () => {
    modal.classList.add('visible');
    modal.classList.remove('hidden');
})

closeButton.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('visible');
})
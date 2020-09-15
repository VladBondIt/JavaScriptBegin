const open = document.querySelector('#open');
const close = document.querySelector('#close');
const container = document.querySelector('#container');
const popup = document.querySelector('.popup')

open.addEventListener('click', () => {
    container.classList.add('active');
    popup.classList.add('active-p');
})
close.addEventListener('click', () => {
    container.classList.remove('active');
    popup.classList.remove('active-p');
})

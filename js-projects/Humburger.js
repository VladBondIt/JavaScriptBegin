const btn = document.querySelector('#btn');
const nav = document.querySelector('#nav');

// При клике на кнопку добавляем переключатель класса
btn.addEventListener('click', () => {
    nav.classList.toggle('active');
    btn.classList.toggle('active');
});

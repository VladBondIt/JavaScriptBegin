// const img = document.querySelector('.img')


function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    heart.innerHTML = '<img width="40px" class="img" src="img/favorite-black-24dp.svg" alt="">';
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove
    }, 5000);
}

setInterval(createHeart, 1000);
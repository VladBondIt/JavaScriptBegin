const imgs = document.querySelector('#imgs');
const img = document.querySelectorAll('#imgs img');
let idx = 0;


function slider() {
    idx++;
    if (idx > img.length - 1) {
        idx = 0;
    };
    imgs.style.transform = `translateX(${-idx * 500}px)`;
};

setInterval(slider, 3000);
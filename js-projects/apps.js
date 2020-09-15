const sounds = [
    sevish,
    bounce,
    bring,
    arrow,
]

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('switch');
    btn.innerText = sound;
    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    });
    document.body.appendChild(btn);
});

function stopSongs() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
}
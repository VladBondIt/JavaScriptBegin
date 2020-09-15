const btn = document.querySelector('#btn')
const container = document.querySelector('#container')


// При клике на кнопку вызываем функцию
btn.addEventListener('click', () => {
    createNotification();
});
// функция которую вызыаем при клике
function createNotification() {
    // ОБЪЯВЛЯЕМ ПЕРЕМЕННУЮ СОЗДАВАЯ БЛОК ДИВ
    const notif = document.createElement('div');
    // ДОБАВЛЯЕМ СОЗДАННОМУ ДИВУ КЛАСС 
    notif.classList.add('toast');
    // ДОБАВЛЯЕМ ДОЧЕРНИМ ЭЛЕМЕНТОМ В КОНТЕЙНЕР СОЗДАННЫЙ РАНЕЕ ДИВ 
    container.appendChild(notif);
    // ДОБАВЛЕНИЕ ТЕКСТА В ДИВ ТОСТ
    notif.innerText = 'This challenge is crazy!';
    // УДАЛЕНИЕ ДИВА НОТИФ С КЛАССОМ ТОСТ ПО ПРОШЕСТВИЮ ВРЕМЕНИ
    setTimeout(() => {
        notif.remove();
    }, 3000);


}

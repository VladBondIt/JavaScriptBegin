const text = 'Good day for practic!! Let`s do it!!';

let index = 0;

function writeText() {
    // ВСТАВЛЯЕМ ТЕКСТ В БОДИ, МЕТОД СЛАЙС ИЗВЛЕКАЕТ ЧАСТЬ СТРОКИ И ВОЗВРАЩАЕТ НОВУЮ СТРОКУ
    document.body.innerText = text.slice(0, index);
    index++;
    // ЕСЛИ ИНДЕКС БОЛЬШЕ ДЛИННЫ ТЕКСТА ТО ИНДЕКС ВОЗВРАЩАЕТСЯ НА ИСХОДНУЮ
    if (index > text.length) {
        index = 0
    };

}
// ПОменщяаем функцию в метод задания интевала
setInterval(writeText, 150);
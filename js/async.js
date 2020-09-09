//  EVENT LOOP
// АСИНХРОННОСТЬ

// const timeOut = setTimeout(() => {
//     console.log('After timeout')
// }, 2500)

// clearTimeout(timeOut)

// const interval = setInterval(() => {
//     console.log('After timeout');
// }, 1000);

// clearInterval(interval)

// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait)
// }

// delay(() => {
//     console.log('after 2 seconds ')
// }, 2000)

// Существует более интересный механизм для работы с асинхронным кодом, Promise обещания.
// Асинхронный код можно обернуть в Promise глобальный класс
// callback promise называется executor принимает 2 параметра функции резолв и реджект
// Промис нужно вернуть иначе его не возможно использовтаь(страннно стрелочные функции по дефолту все возвращают)
// функция реджект передает ошибку и возможнсть её оформления
// своебразный способ тестирования собсвенного кода
// const delay = (wait = 1000) => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve()
//             reject('Что-то пошло не так, повторите попытку.')
//         }, wait)
//     })
//     return promise
// }
// // Возвращаем промис
// delay(2500)
//     // Метод промиса
//     .then(() => {
//         console.log('After 2 seconds')
//     })
//     .catch(err => console.error(err))
//     .finally(() => console.log('Finally'))
// Callback hell контроль большого количества асинхронного кода и вы управляете им через колбеки
// возможна такая ситуация можество колбеков в нутри дург друга 3 - 4 уровня вложенности колбека
// возникают сложности при управлении такой струкры кода,Promise предназначем что бы убрать большой уровень вложенности, в самих промисах
// мы можем возвращать другой промис и при этом не перехадить на более глубинный уровень

// const getData = () => new Promise(resolve => resolve([
//     1, 1, 2, 3, 5, 8, 13
// ]))

// getData().then(data => console.log(data))

// async function asyncExm() {
//     try {
//         await delay(3000)
//         const data = await getData()
//         console.log('Data', data)
//     } catch (e) {
//         console.log(e)
//     } finally {
//         console.log('Finally')
//     }
// }

// asyncExm()

// AJAX запросы это асинхронные запросы которые JS может в фоне браузера отправлять на сервер,
// и без перезагрузки страницы получать данные по запросу обратно в браузере.

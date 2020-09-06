// 1 ФУНКЦИИ
// Function Expression
// Занесение функций в переменную
// Не возможно обращатся к этой функции до её инициализации по коду
// const greet2 = function greet2(name) {
//     console.log('Hello2:', name)
// }
// greet('Lena')
// greet2('Lena')

// const greet2 = function greet2(name) { // error
//     console.log('Hello2:', name)       // error
// }                                      // error

// Function Declaration
// Можем обращатся к этой функции когда захотим
// function greet(name) {
//     console.log('Hello:', name)
// }

// console.log(typeof greet)
// Функции являются объектами
// console.dir(greet)

// 2 АНОНИМНЫЕ ФУНКЦИИ
// let counter = 0

// const interval = setInterval(function () {
//     if (counter === 10) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// }, 1000)

// 3 СТРЕЛОЧНЫЕ ФУНКЦИИ

// function greet(name) {
//     console.log('Hello:', name)
// }

// const arrow = (name) => {
//     console.log('Hello:', name)
// }

// const arrow2 = (name, age) => console.log(`Hello my name ${name} and my age ${age}`)

// arrow2('Vladimir', 30)

// const pow2 = num => {
//     return num ** 2
// }

// const pow2 = num => num ** 2

// console.log(pow2(4));

// 4 ПАРАМЕТРЫ ПО УМОЛЧАНИЮ

// const sum = (a = 40, b = 2) => a + b

// console.log(sum(41, 5))

// const sum2 = (a = 40, b = a * 2) => a + b

// console.log(sum(41, 5))
// console.log(sum2())

// function sumAll(...all) {
//     let result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result
// }

// const res = sumAll(1, 2, 3, 4, 5, 6, 7)

// console.log(res)

// ЗАМЫКАНИЯ

// Из одной функции возвращаем другую и дальше возникает сохранение контекста
// Замкнули параметр name, lastName варьируется
// function createMamber(name) {
//     return function (lastName) {
//         console.log(name + lastName)
//     }
// }
// Преимущество создание приватных переменных
// const logWithLatName = createMamber('Vladimir')

// console.log(logWithLatName(' Bond'))


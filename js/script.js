// 1 переменные

// Вариабл может менятся,стараться не использовтаь
// var name = 'Vladimir' // Строки
// Константа есть константа доступна только для чтения
// const firstName = 'Vladimir'
// const lastName = 'Bond'
// const isProger = true // Булевые значения
// Может так же менятся как и вар
// let age = 32 //Числа, номера
// Динамическая типизация
// age = 'string'
// name = 'Vl'
// camelCase
// Точки с запятой не нужны!!!=)

// const _private = 'private'

// Ошибка
// const 5lool = '5'

//  2 Мутирование

// + concatenation                         + new string       + число js приводит тип данных автоматически к строке
// console.log('Person name: ' + firstName + ', person age: ' + age)
// браузер по сути интерпритатор Js
// alert('Person name: ' + firstName + ', person age: ' + age)

// const firstName = prompt('Insert first name')
// alert(firstName + ' ' + lastName)

// 3 Операторы

// let currentYear = 2020
// const birthYear = 1988

// const age = currentYear - birthYear
// const a = 10
// const b = 5

// математические операторы
// console.log(a + b)
// console.log(a - b)
// console.log(a / b)
// console.log(a * b)
// ++ инкриминтация единицы к числу
// console.log(currentYear++)
// в завситимости от того в какой части операции используется оператор,
// определяется и его исполнение
// console.log(++currentYear)
// console.log(--currentYear)

// let c = 32
// c = c + a
// Сокращение, подобное сокращение характерно для всех мат. операций
// c += a

// 4 Типы данных

// Примитивы
// const isProger = true // булевые значения
// const name = 'Vladimir' // строки
// const age = 32 // числа
// let x // undefind не определен
// null  

// console.log(typeof isProger)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// bug typeof - не всегда возвращает то что нам нужно
// console.log(typeof null)
// console.log(null)

// 5 Приоритет операторов

// const fullAge = 31
// const birthYear = 1988
// const currentYear = 2020

// > < >= <= сравнение
// operator precedence mdn - docs приоритет операторов () - самый высокий приоритет
// const isFullAge = currentYear - birthYear >= fullAge // 31 >= 32

// console.log(isFullAge)

// 6 условные апператоры

// const courseStatus = 'fail' // эта переменная может принимать в себя различные значения ready pending fail

// // ключивое слово if (условие-выражение) {описываем блок который выполнится если условие совпадает}
// if (courseStatus === 'ready') {
//     console.log('Курс готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log('Курс находит в процессе разработки')
// } else {
//     console.log('course faild')
// }

// const isReady = false

// if (isReady) {
//     console.log('All is ready')
// } else {
//     console.log('All is not ready!!')
// }
// Если присутсвует всего одно выражение-условие, мы можем использовать Тиранорное выражение,
// которое сокращает запись блока if else
// isReady ? console.log('All is ready') : console.log('All is not ready!!')

// const num1 = 42
// const num2 = '42'  //string

// рекомендуется использовать 3 знака равенства для приведение к одному типу данных
// console.log(num1 === num2)

// 7 Булевая логика
// Mdn Логические операторы 
// && и  , || или , !(не)

// 8 Функции

// function calcAge(year) {
//     return 2020 - year
// }
// console.log(calcAge(1988))
// console.log(calcAge(2019))
// console.log(calcAge(1999))

// function infoPerson(name, year) {
//     const age = calcAge(year)
//     if (age > 0) {
//         console.log('Man ' + name + ' now age ' + age)
//     } else {
//         console.log('Dont mess me man')
//     }
// }

// infoPerson('Vladimir', 1988)
// infoPerson('Mihail', 2023)
// infoPerson('Olga', 1994)

// 9 Массивы
// Отсчет начинается с нуля
// const cars = ['Mazda', 'BMW', 'Ford', 'Honda']
// Не нужно такое писать ↓↓
// const cars = new Array('Mazda', 'BMW', 'Ford', 'Honda')
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])

// cars[0] = 'Porshe'

// cars[4] = 'Mazda'
// cars[cars.length] = 'Reno'
// console.log(cars)

// 10 Циклы
// Перебор масивов
// const cars = ['Mazda', 'BMW', 'Ford']
// важно чтобы была переменная let что бы могла меняться,
// начинаем с нулевого индекса ; дальше говорим до кого момента 
// нужно итерировать-перебирать данный цикл
// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }
// Новый удобный цикл for of

// for (let car of cars) {
//     console.log(car)
// }

// 11 Объекты
// Группировка с разными структурами

// const person = {
//     name: 'Vladimir',
//     lastName: 'Bond',
//     year: 1988,
//     lang: ['ru', 'eng'],
//     hasWife: false,
//     // Функция в контексте обекта называется методом
//     greet: function () {
//         console.log('greet from person')
//     }
// }

// console.log(person.name)
// console.log(person['name', 'year'])
// const key = 'year'
// console.log(person[key])
// person.hasWife = true
// person.isProger = true
// console.log(person)
// person.greet()
// МАССИВЫ
// Прототип это набор взоимосвязаных объектов с потощью которых
// добавляется опеределенный функционал для структур данных

// const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes']

// const people = [
//     { name: 'Vladimir', budget: 4200 },
//     { name: 'Mikhail', budget: 3500 },
//     { name: 'Elena', budget: 1700 }
// ]

// const fib = [1, 1, 2, 3, 5, 8, 13]

// console.log(cars)
// console.log(cars.length)

// Метод мутирующий объект
// cars.push('Reno')
// cars.unshift('Volga')
// console.log(cars)
// const firstCar = cars.shift()
// const lastCar = cars.pop()
// console.log(cars)
// console.log(firstCar)
// console.log(lastCar)
// console.log(cars)

// console.log(cars)
// console.log(cars.reverse())

// const index = cars.indexOf('BMW')
// cars[index] = 'Porshe'
// console.log(cars)

// Метод findIndex является циклом для объекта people,
// функция является коллбэком callback

// const index = people.findIndex(function (person) {
//     return person.budget === 3500
// })
// const person = people.find(function (person) {
//     return person.budget === 3500
// })

// let findedPerson
// for (const person of people) {
//     if (person.budget === 3500) {
//         findedPerson = person
//     }
// }

// ЛЯМДА ФУНКЦИЯ
// const person = people.find((person) => person.budget === 3500)

// console.log(person)

// проверка начилия элемента в массиве
// console.log(cars.includes('Mazda'))

// Методы высокого порядка
// Метод мап всегда возвращает новый массив
// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })

// Такая конструкция по умолчанию делает return
// const pow2fib = fib.map(num => num ** 2)

// const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)
// // fib.map(pow2) возвращает нам массив у него можно вызвать еще метод
// const pow2fib = fib.map(pow2).map(sqrt)
// // console.log(upperCaseCars)
// // console.log(cars) 
// console.log(pow2fib)
// const pow2fib = fib.map(pow2)
// const filtredNumbers = pow2fib.filter(num => num > 20)

// console.log(pow2fib)
// console.log(filtredNumbers)


// 1 task

// const text = 'Hello, we learn JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

// 2 task
// const people = [
//     { name: 'Vladimir', budget: 4200 },
//     { name: 'Mikhail', budget: 3500 },
//     { name: 'Elena', budget: 1700 }
// ]

// Чейнинг вызов методов по цепочке
// const sumAllBudget = people
//     .filter(person => person.budget > 2000)
//     .reduce((acc, person) => {
//         acc += person.budget
//         return acc
//     }, 0)

// console.log(sumAllBudget)
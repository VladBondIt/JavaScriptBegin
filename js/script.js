// ОБЪЕКТЫ

const person = {
    name: 'Vladimir',
    age: 31,
    isProger: true,
    lang: ['ru', 'eng'],
    // 'complex key': 'Complex Value',
    // ['key_' + (1 + 3)]: 'Computed key', // key = 4
    // МЕТОД
    // greet: function () {
    // }
    greet() {
        console.log('Greet from person')
    },
    info() {
        console.log('Person information: ', this.name)
    }
}

// console.log(person.name)
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person['complex key'])
// person.age++
// person.lang.push('by')
// person.greet()
// // person['key_4'] = undefined
// delete person['key_4']
// console.log(person)
// console.log(person['key_4'])

// НОВЫЙ СИНТАКСИС
// ↓↓↓ ДУБЛИРОВАНИЕ ↓↓↓
// const name = person.name
// const age = person.age
// const lang = person.lang
// Деструктуризация
// const { name, age, lang } = person
// const { name, age, lang } = person
// const { name, age: personAge = 10, lang } = person

// console.log(name, personAge, lang)

// Объекты не итерируемы
// Цикл for in опасен тем что он бежит не только по объекту, но и забегает в прототип
// и из за этого могут возникать определенные проблемы
// чтобы этого избежать нужно вписать проверку
// for (let key in person) {
// если объект person имеет свое собстветнное свойство 
// не находящееся в прототипе: key, тогда он может считаться безопасным
//     if (person.hasOwnProterty(key)) {
//         console.log('key: ', key)
//         console.log('value: ', person[key])
//     }
// }
// Есть современые способы делать итерацию по ключам и по объекту исползуя не цикл,
// а глобальный объект object. на интересует ключи keys
// Метод массива forEach
// Object.keys(person).forEach((key) => (
//     console.log('key: ', key),
//     console.log('value: ', person[key])
// ))
// Контекст this

// person.info()

const logger = {
    keys() {
        console.log('Object Keys: ', Object.keys(this))
    },
    keysAndValues() {
        Object.keys(this).forEach(key => {
            console.log(`"${key}" : ${this[key]}`)
        })

    }
}
// bind берет и привязывает опеределенный контекст
// const bound = logger.keys.bind(logger)
// bound()
logger.keysAndValues.call(person)



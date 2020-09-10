// РАБОТА С DOM
// Document Object Model

// // Глобальный объект
// // Объект document – основная «входная точка».С его помощью мы можем что-то создавать или менять на странице.
// // document 
// // Глобальный объект можно опустить, это то что происходит за кулисами.
// // window.alert('1')
// // .prompt()
// // .setInterval()
// // Каждый из тегов HTML это узел - node мы можем получать их в скрипте
// // Самый старый, самый быстрый и надежный способ получить элемент getbyId
// // h1 является объектом
// const heading = document.getElementById('hello')
// // множество элементов,так лучше не делать
// // const heading2 = document.getElementsByTagName('h2')[0]
// // устаревший метод
// // const heading2 = document.getElementsByClassName('header-2')[0]
// // QuerySelector более универсальный чем гет Айди,в значении указываем CSS селекторы
// // const heading2 = document.querySelector('.header-2')
// // const heading2 = document.querySelector('#subHello') // Всегда 1 элемент
// const heading2 = document.querySelector('h2')

// // console.log(heading2.querySelector())
// // console.dir(heading2)
// // const heading3 = heading2.nextElementSibling
// // console.log(heading3)

// // console.dir(heading2)
// const h2List = document.querySelectorAll('h2')
// // console.log(h2List)
// const heading3 = h2List[h2List.length - 1]
// // console.log(heading3)

// // setTimeout(() => {
// //     heading.textContent = 'Change from JS'
// //     heading.style.color = 'red'
// //     // console.dir(heading.textContent)
// //     heading.style.textAlign = 'center'
// //     heading.style.backgroundColor = 'lightblue'
// //     heading.style.letterSpacing = '6px'
// //     heading.style.fontWeight = '700'
// //     heading.style.fontSize = '40px'
// //     heading.style.textTransform = 'UpperCase'
// //     heading.style.padding = '15px'

// // }, 1500)
// setTimeout(() => {
//     addStylesTo(heading, 'JavaScript')
// }, 1500)


// setTimeout(() => {
//     addStylesTo(heading2, 'Practic is a key', 'black')
// }, 3000)
// // setTimeout(() => {
// //     addStylesTo(heading3, 'And succes is coming', 'green', '2rem')
// // }, 4500)
// const link = heading3.querySelector('a')

// link.addEventListener('click', (event) => {
//     event.preventDefault()
//     console.log('click on link', event.target.getAttribute('href'))
//     const url = event.target.getAttribute('href')
//     window.location = url
// })

// setTimeout(() => {
//     addStylesTo(link, 'And succes is coming', 'green', '2rem')
// }, 4500)

// function addStylesTo(node, text, color = 'red', fontSize) {

//     node.textContent = text
//     node.style.color = color
//     // console.dir(heading.textContent)
//     node.style.textAlign = 'center'
//     node.style.backgroundColor = 'lightblue'
//     node.style.letterSpacing = '6px'
//     node.style.fontWeight = '700'
//     node.style.fontSize = '40px'
//     node.style.textTransform = 'UpperCase'
//     node.style.padding = '15px'
//     node.style.width = '100%'
//     node.style.display = 'block'
//     // проверка на falsy: '', undefined, null, 0, false если фонт сайз равняется какому то из этих значений
//     // то блок if выполнятся не будет
//     if (fontSize) {
//         node.style.fontSize = fontSize
//     }
// }

// // СОБЫТИЯ Events
// // Mdn MouseEvent
// heading.onclick = () => {
//     if (heading.style.color === 'red') {
//         heading.style.color = 'black'
//         heading.style.backgroundColor = 'white'
//         heading.style.transform = 'rotate(-20deg)'
//         heading.style.transitionDuration = '0.4s'
//         heading.style.opacity = '0.7'
//     } else {
//         heading.style.color = 'red'
//         heading.style.backgroundColor = 'lightblue'
//         heading.style.transform = 'rotate(0deg)'
//         heading.style.opacity = '1'
//     }
// }

// heading2.addEventListener('dblclick', () => {
//     if (heading2.style.color === 'black') {
//         heading2.style.color = 'red'
//         heading2.style.backgroundColor = 'white'
//         heading2.style.transform = 'rotate(20deg)'
//         heading2.style.transitionDuration = '0.4s'
//         heading2.style.opacity = '0.7'
//     } else {
//         heading2.style.color = 'black'
//         heading2.style.backgroundColor = 'lightblue'
//         heading2.style.transform = 'rotate(0deg)'
//         heading2.style.opacity = '1'
//     }

// })

// heading3.onmouseenter = () => {
//     if (heading3.style.color === 'green') {
//         heading3.style.color = 'red'
//         heading3.style.backgroundColor = 'black'
//         heading3.style.transform = 'rotate(-20deg)'
//         heading3.style.transitionDuration = '0.4s'
//         heading3.style.opacity = '0.7'
//     } else {
//         heading3.onmouseleave = () => {
//             heading3.style.color = 'green'
//             heading3.style.backgroundColor = 'lightblue'
//             heading3.style.transform = 'rotate(0deg)'
//             heading3.style.opacity = '1'
//         }
//     }
// }

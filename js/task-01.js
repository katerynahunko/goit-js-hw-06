// Напиши скрипт, який:
// Порахує і виведе в консоль кількість 
// категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку 
// ul#categories, знайде і виведе в консоль 
// текст заголовку елемента (тегу <h2>) 
// і кількість елементів в категорії (усіх <li>,
//  вкладених в нього).
// Для виконання цього завдання потрібно 
// використати метод forEach() і властивості 
// навігації по DOM.
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3
// Category: Animals
// Elements: 4
// Category: Products
// Elements: 3
// Category: Technologies
// Elements: 5

const list = document.querySelector('#categories')
const listEl = list.querySelectorAll('li.item')
const listLength = listEl.length
console.log("Number of categories:", listLength)

// console.log(listEl)
const listChildren = list.children[0]
// console.log(listChildren)

const listH2111 = listChildren.children[0].innerText
console.log('Category:', listH2111)


// listChildren.children[0].forEach(() => {
//     return listChildren.children[0].innerText
// });


// // Метод перебирання forEach
// listChildren.forEach(function (listChild, 0) {
//     console.log(`Індекс ${0}, значення ${listChild}`);
//   });

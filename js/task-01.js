const list = document.querySelector('#categories')
const listEl = list.querySelectorAll('li.item')
const listLength = listEl.length
console.log("Number of categories:", listLength)

const listChildren = list.children[0]

listEl.forEach((li) => {
    const h2 = li.querySelector('h2');
    const liList = li.querySelectorAll('li');
    console.log(`Category: ${h2.innerText}`);
    console.log(`Elements: ${liList.length}`);
    });
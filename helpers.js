
let productPage = document.querySelector('article')

console.log('article', productPage)

let renderToProductPage = function( myObject ) {

    let keys = Object.keys(myObject)

    for (let index = 0; index < keys.length; index += 1) {
        if (keys[index] !== 'size') {
            let paragraph = document.createElement('p')
            let thisKey = keys[index]
            paragraph.innerText = myObject[thisKey]
            productPage.append(paragraph)
        }
    }

    let newParagraph = document.createElement('p')
    // size is an object - html does not understant - notice [object Object] on the page
    newParagraph.innerHTML = myObject.size
    // the above line needs to be newParagraph.innerHTML = JSON.stringify(myObject.size)
    // JSON.stringify converts objects (and arrays etc.) to strings
    productPage.append(newParagraph)
}

//Line Order
// 2, 4, 6, to code.js
// from code.js 6, 8, 10 - 16 loop

console.dir(Object)



// look up node foundation's javascript style guide
let newProduct = {
    name: 'my new product',
    price: 3000.00,
    sn: 'a;ldjasjkdpowkd',
    barcode: 'imageurl',
    image: 'imageurl2',
}

// let myObject = new Object()
// 

// { key1: value1, key2: value2}

let objectKeys = Object.keys(newProduct)
// console.log('keys', objectKeys)

let objectValues = Object.values(newProduct)
// console.log('values', objectValues)

let objectEntries = Object.entries(newProduct)
// console.log('entries', objectEntries)

newProduct.size = {
    length: '10 inches',
    width: '10 inches',
    height: '10 inches',
}

renderToProductPage(newProduct)

// Line Order
// 2 - 8, 14, 17, 20, 23, to helpers.js

console.log(newProduct)

// delete newProduct.size

// console.log(newProduct)

console.dir(new Array())
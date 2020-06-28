"use strict";


const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

console.log(products);

const result1 = products.filter(product => product.photos && product.photos.length);
console.log(result1);

const result2 = products;
products.sort( function (a,b) {
    return a.price - b.price;
})

console.log(result2);

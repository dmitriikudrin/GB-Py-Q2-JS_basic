"use strict";

// es5
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price * 0.75;
}

const prod1 = new Product('prod 1', 100);
console.log(prod1.name, prod1.price);
prod1.make25PercentDiscount();
console.log(prod1.name, prod1.price);




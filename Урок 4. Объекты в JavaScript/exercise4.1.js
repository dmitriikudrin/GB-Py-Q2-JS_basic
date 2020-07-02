"use strict";


function Number(num) {
    if ((+num >= 0 && +num <= 999) && ((+num ^ 0) === +num)) {
        this.units = +num % 10;
        this.tens = Math.floor(+num / 10) % 10;
        this.hundereds = Math.floor(+num / 100);
    }
}

const num1 = new Number('1423');
const num2 = new Number('132');
const num3 = new Number('14q');
const num4 = new Number('14.2');




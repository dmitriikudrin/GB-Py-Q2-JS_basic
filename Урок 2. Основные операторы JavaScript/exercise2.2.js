"use strict"

let a = 2;
let x = 1 + (a *= 2);
/*
1. Выполнится присваивание a *= 2 --> a = 4
2. Выполнится сложение x = 1 + a = 1 + 4 = 5
 */

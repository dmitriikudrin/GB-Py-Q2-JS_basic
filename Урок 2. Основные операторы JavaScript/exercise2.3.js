"use strict"

let a = -5
let b = 13

if (a >= 0 && b >= 0) {
    alert(a - b)
} else if (a <= 0 && b <= 0) {
    alert(a * b)
} else if (Math.sign(a) != Math.sign(b)) {
    alert(a + b)
}
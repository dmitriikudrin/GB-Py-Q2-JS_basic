"use strict"

let num = prompt("Введите сумму в рублях:")
let result

let last_num = +num.charAt(num.length - 1)

switch (last_num) {
    case 0:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
        result = "рублей"
        break
    case 1:
        result = "рубль"
        break
    case 2:
    case 3:
    case 4:
        result = "рубля"
        break
}

alert(`Ваша сумма в ${num} ${result} успешно зачислена.`)

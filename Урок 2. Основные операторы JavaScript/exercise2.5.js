"use strict"

function addition(a, b) {
    return (a + b)
}

function subtraction(a, b) {
    return (a - b)
}

function multiplication(a, b) {
    return (a * b)
}

function division(a, b) {
    return (a / b)
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            alert(addition(arg1, arg2))
            break
        case '-':
            alert(subtraction(arg1, arg2))
            break
        case '*':
            alert(multiplication(arg1, arg2))
            break
        case '/':
            alert(division(arg1, arg2))
            break
        default:
            alert("Неверная операция")
    }
}


let a = +prompt("Введите первое число")
let b = +prompt("Введите второе число")
let op = prompt("Введите операцию")

mathOperation(a, b, op)

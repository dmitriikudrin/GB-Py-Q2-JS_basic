"use strict";

let buttons = document.querySelectorAll('button');



buttons.forEach(element => {
    element.addEventListener('click', function (event) {
        let desc = element.parentNode.getElementsByClassName('desc')[0];
        let img = element.parentNode.querySelector('img');
        if (element.innerText === 'Отмена') {
            element.innerText = 'Подробнее';
            img.style.display = "block";
            desc.style.display = "none";
        } else {
            element.innerText = 'Отмена'
            img.style.display = "none";
            desc.style.display = "block";
        }


    })
})

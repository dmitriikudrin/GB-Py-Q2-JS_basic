"use strict";

let head = document.querySelector('head');
head.insertAdjacentHTML('beforeend',
    '<link\n' +
    '    rel="stylesheet"\n' +
    '    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"\n' +
    '  />');


let btn_open = document.getElementById("btn_open");
let btn_close = document.getElementById("btn_close");
let modal = document.getElementById("modal");
let modal_content = document.getElementById("modal_content");

btn_open.onclick = function () {
    modal.style.display = "block";
    modal_content.classList.add('animate__animated');
    modal_content.classList.add('animate__backInDown');
    setTimeout(function () {
        modal_content.classList.remove('animate__animated');
        modal_content.classList.remove('animate__backInDown');
    }, 1000);
}

btn_close.onclick = function (event) {
    modal_content.classList.add('animate__animated');
    modal_content.classList.add('animate__bounceOut');
    setTimeout(function () {
        modal_content.classList.remove('animate__animated');
        modal_content.classList.remove('animate__bounceOut');
        modal.style.display = "none";
    }, 500);
}

modal.onclick = function () {
    modal.style.display = "none";
}

modal_content.onclick = function (event) {
    event.stopPropagation();
}


"use strict";




let btn_open = document.getElementById("btn_open");
let btn_close = document.getElementById("btn_close");
let modal = document.getElementById("modal");
let modal_content = document.getElementById("modal_content");

btn_open.onclick = function () {
    modal.style.display = "block";
}

btn_close.onclick = function (event) {
    modal.style.display = "none";
}

modal.onclick = function () {
    modal.style.display = "none";
}

modal_content.onclick = function (event) {
    event.stopPropagation();
}


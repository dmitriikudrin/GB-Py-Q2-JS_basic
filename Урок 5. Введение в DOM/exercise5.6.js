"use strict";

const chessBoard = function () {
    for (let i = 0; i <= 8; i++) {
        if (i === 0) {
            let letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

            let row = document.createElement('div');
            row.className = 'row';

            for (let j = 0; j <= 8; j++) {
                let cell_head = document.createElement('div');
                cell_head.className = 'cell_head';
                cell_head.innerText = letters[j];
                row.insertAdjacentElement('beforeend', cell_head);
            }
            document.body.insertAdjacentElement('beforeend', row);
        } else {
            let row = document.createElement('div');
            row.className = 'row';

            let cell_head = document.createElement('div');
            cell_head.className = 'cell_head';
            cell_head.innerText = `${i}`;
            row.insertAdjacentElement('beforeend', cell_head);

            for (let j = 1; j <= 8; j++) {
                let cell = document.createElement('div');
                cell.innerHTML = insertChessPiece(i, j);
                if ((i % 2) ===  (j % 2)) {
                    cell.className = 'cell_white';
                    row.insertAdjacentElement('beforeend', cell);
                } else {
                    cell.className = 'cell_black';
                    row.insertAdjacentElement('beforeend', cell);
                }
            }
            document.body.insertAdjacentElement('beforeend', row);
        }
    }
}

function insertChessPiece(i, j) {
    let piece;
    if (i === 1 && (j === 1 || j === 8)) {
        piece = '&#9820;';
    } else if (i === 1 && (j === 2 || j === 7)) {
        piece = '&#9822;';
    } else if (i === 1 && (j === 3 || j === 6)) {
        piece = '&#9821;';
    } else if (i === 1 && j === 4) {
        piece = '&#9819;';
    } else if (i === 1 && j === 5) {
        piece = '&#9818;';
    } else if (i === 2) {
        piece = '&#9823;';
    } else if (i === 7) {
        piece = '&#9817;';
    } else if (i === 8 && (j === 1 || j === 8)) {
        piece = '&#9814;';
    } else if (i === 8 && (j === 2 || j === 7)) {
        piece = '&#9816;';
    } else if (i === 8 && (j === 3 || j === 6)) {
        piece = '&#9815;';
    } else if (i === 8 && j === 4) {
        piece = '&#9813;';
    } else if (i === 8 && j === 5) {
        piece = '&#9812;';
    } else {
        piece = '';
    }
    return piece;
}

chessBoard();
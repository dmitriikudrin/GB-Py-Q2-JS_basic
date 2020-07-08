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
                if ((i % 2) ===  (j % 2)) {
                    let cell_white = document.createElement('div');
                    cell_white.className = 'cell_white';
                    row.insertAdjacentElement('beforeend', cell_white);
                } else {
                    let cell_black = document.createElement('div');
                    cell_black.className = 'cell_black';
                    row.insertAdjacentElement('beforeend', cell_black);
                }
            }
            document.body.insertAdjacentElement('beforeend', row);
        }
    }
}

chessBoard();
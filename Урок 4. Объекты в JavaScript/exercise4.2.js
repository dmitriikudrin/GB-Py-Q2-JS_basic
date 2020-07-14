"use strict";

function displayGame(locationX, locationY) {
    console.clear();
    let outputConsole = ''
    for (let y = 0; y <= 9; y++) {
        let outputLine = '';
        for (let x = 0; x <= 9; x++) {
            if (x === locationX && y === locationY) {
                outputLine = outputLine + 'O';
            } else {
                outputLine = outputLine + '*';
            }
            if (x <= 9) {
                outputLine = outputLine + ' ';
            }
        }
        if (y <= 9) {
            outputLine = outputLine + '\n';
        }
        outputConsole = outputConsole + outputLine
    }
    console.log(outputConsole);
}

let user = {
    currentLocationX: 0,
    currentLocationY: 0,

    move(direction) {
        switch(direction) {
            case '1':
                this.goToLeftDown();
                break;
            case '2':
                this.goToDown();
                break;
            case '3':
                this.goToRightDown();
                break;
            case '4':
                this.goToLeft();
                break;
            case '6':
                this.goToRight();
                break;
            case '7':
                this.goToLeftUp();
                break;
            case '8':
                this.goToUp();
                break;
            case '9':
                this.goToRightUp();
                break;
            default:
                alert('Неверное направление.')
        }
    },

    increaseLocationX() {
        if (this.currentLocationX === 9) {
            this.currentLocationX = 0;
        } else {
            this.currentLocationX++;
        }
    },

    decreaseLocationX() {
        if (this.currentLocationX === 0) {
            this.currentLocationX = 9;
        } else {
            this.currentLocationX--;
        }
    },

    increaseLocationY() {
        if (this.currentLocationY === 9) {
            this.currentLocationY = 0;
        } else {
            this.currentLocationY++;
        }
    },

    decreaseLocationY() {
        if (this.currentLocationY === 0) {
            this.currentLocationY = 9;
        } else {
            this.currentLocationY--;
        }
    },

    goToLeft() {
        this.decreaseLocationX();
    },

    goToRight() {
        this.increaseLocationX();
    },

    goToUp() {
        this.decreaseLocationY();
    },

    goToDown() {
        this.increaseLocationY();
    },

    goToLeftUp() {
        this.decreaseLocationX();
        this.decreaseLocationY();
    },

    goToLeftDown() {
        this.decreaseLocationX();
        this.increaseLocationY();
    },

    goToRightUp() {
        this.increaseLocationX();
        this.decreaseLocationY();
    },

    goToRightDown() {
        this.increaseLocationX();
        this.increaseLocationY();
    },
}

function game() {
    if (confirm("Поиграем?")) {
        displayGame(user.currentLocationX, user.currentLocationY);
        alert("Вам необходимо будет выбирать направление движения:\n" +
            "1 - ↙\n" +
            "2 - ↓\n" +
            "3 - ↘\n" +
            "4 - ←\n" +
            "6 - →\n" +
            "7 - ↖\n" +
            "8 - ↑\n" +
            "9 - ↗\n");
        while (true) {
            let userInput = prompt("Введите направление движения. Для выхода из игры нажмите отмена.");
            if (userInput === null) {
                break;
            } else if (userInput === '') {
                alert('Необходимо выбрать направление');
            } else if (isFinite(userInput)) {
                user.move(userInput);
                displayGame(user.currentLocationX, user.currentLocationY);
            } else {
                alert('Неверное направление');
            }
        }
    }
}

game()

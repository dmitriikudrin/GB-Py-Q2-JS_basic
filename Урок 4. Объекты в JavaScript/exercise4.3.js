"use strict";

let game = {
    questions: [
        {
            question: 'Что искал Колумб, а в результате открыл Америку?',
            a: 'Голливуд',
            b: 'Диснейленд',
            c: 'Путь в Индию',
            d: 'Кафе с гамбургерами',
            answer: 'c',
        },
        {
            question: 'Каким словом продолжается детская считалочка «Аты-баты, шли…»?',
            a: 'Солдаты',
            b: 'Дебаты',
            c: 'Фанаты',
            d: 'До хаты',
            answer: 'a',
        },
        {
            question: 'Как называют открытого, простодушного человека??',
            a: 'Рубаха-парень',
            b: 'Пиджак-парень',
            c: 'Кафтан-парень',
            d: 'Юбка-парень',
            answer: 'a',
        },
        {
            question: 'В каком виде спорта разыгрывают кубок Стэнли?',
            a: 'Футбол',
            b: 'Хоккей',
            c: 'Баскетбол',
            d: 'Теннис',
            answer: 'b',
        },
        {
            question: 'Какой легкоатлетический снаряд спортсмены толкают?',
            a: 'Диск',
            b: 'Молот',
            c: 'Копье',
            d: 'Ядро',
            answer: 'd',
        }
    ],

    userScore: 0,

    example() {
        alert('Я задам тебе 5 вопрос. Тебе необходиму будет выбрать правильный ответ.\n' +
            'Например:' +
            'Что, согласно известному выражению, должен сделать последовательный человек, сказавший «А»?\n' +
            'A: Сказать «Б»\n' +
            'B: Задать вопрос\n' +
            'C: Дождаться ответа\n' +
            'D: Продолжить тост\n' +
            'Правильный ответ - A')
    },

    init() {
        if (confirm('Сыграем в игру?')) {
            this.example();
            this.run();
        } else {
            alert('Жаль:(');
        }
    },

    run() {
        while (true) {
            this.userScore = 0;
            let breakPoint1 = false
            for (let i = 0; i < this.questions.length; i++) {
                let breakPoint2 = false;
                while (true) {
                    let userAnswer = this.showQuestion(this.questions[i]);
                    if (userAnswer === null) {
                        breakPoint2 = true;
                        break;
                    } else if (['a', 'b', 'c', 'd'].includes(userAnswer.toLowerCase())) {
                        this.check(this.questions[i], userAnswer.toLowerCase());
                        break
                    } else {
                        alert('Необходимо выбрать корректный вариант ответа.');
                    }
                }
                if (breakPoint2) {
                    breakPoint1 = true;
                    break;
                }
            }
            alert(`Количество правильных ответов - ${this.userScore}`);

            if (breakPoint1) {
                alert('Игра окончена.')
                break;
            }

            if (!confirm('Сыграем еще раз?')) {
                break;
            }
        }
    },

    showQuestion(question) {
        return prompt(`${question.question}\n
                            A: ${question.a}\n
                            B: ${question.b}\n
                            C: ${question.c}\n
                            D: ${question.d}\n`)
    },

    check(question, userAnswer) {
        if (question.answer === userAnswer) {
            this.userScore++;
            alert('Это правильный ответ.');
        } else {
            alert('Это неправильный ответ.');
        }
    }
}

game.init();

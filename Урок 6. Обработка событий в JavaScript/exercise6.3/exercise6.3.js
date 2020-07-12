document.head.insertAdjacentHTML("afterbegin", '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">');

let header = document.querySelector('header');

let basketIcon = document.createElement('i');
basketIcon.classList.add('fas', 'fa-shopping-basket');
header.insertAdjacentElement('afterbegin', basketIcon);

let basket = document.querySelector('.basket');
basketIcon.addEventListener('click', function (event) {
    basketVisibility.makeVisible(event);
})

// Скрыть/показать корзину
let basketVisibility = {
    basketVisible: false,

    makeVisible(event) {
        if (event.currentTarget === basketIcon && !this.basketVisible) {
            this.basketVisible = true;
            this.showBasket();
        } else if (event.currentTarget === basketIcon && this.basketVisible) {
            this.basketVisible = false;
            this.hideBasket();
        }
    },

    showBasket() {
        basket.classList.remove('basket-hide');
    },

    hideBasket() {
        basket.classList.add('basket-hide');
    },

    buildBasket() {
        $("div.basketRow").remove()
        for (let el in basketContents.content) {
            prod = basketContents.content[el]
            if (basketContents.content[el] !== undefined) {
                let basketRow = document.createElement('div');
                basketRow.classList.add('basketRow');
                basket.insertAdjacentElement('beforeend', basketRow);

                let basketRowID = document.createElement('div');
                basketRowID.classList.add('id');
                basketRowID.innerText = `${prod.id}`;
                basketRow.insertAdjacentElement('beforeend', basketRowID);

                let basketRowName = document.createElement('div');
                basketRowName.classList.add('name');
                basketRowName.innerText = `${prod.name}`;
                basketRow.insertAdjacentElement('beforeend', basketRowName);

                let basketRowPrice = document.createElement('div');
                basketRowPrice.classList.add('price');
                basketRowPrice.innerText = `${prod.price}`;
                basketRow.insertAdjacentElement('beforeend', basketRowPrice);

                let basketRowCount = document.createElement('div');
                basketRowCount.classList.add('count');
                basketRowCount.innerText = `${prod.count}`;
                basketRow.insertAdjacentElement('beforeend', basketRowCount);

                let basketRowDelete = document.createElement('div');
                basketRowDelete.classList.add('fas', 'fa-trash-alt', 'delete');
                basketRowDelete.setAttribute('data-id', `${prod.id}`);
                basketRow.insertAdjacentElement('beforeend', basketRowDelete);
            }
        }

        addDelBtnsListener();
    },
}

// Слушаем клики по кнопкам "В корзину"
let buyBtns = document.querySelectorAll('.buy');
buyBtns.forEach(function (buyBtn) {
    buyBtn.addEventListener('click', function (event) {
        let id = event.target.dataset.id;
        let price = event.target.dataset.price;
        let name = event.target.dataset.name;
        basketContents.addContent(id, name, price);
    })
})

function addDelBtnsListener() {
    let delBtns = document.querySelectorAll('.delete');
    delBtns.forEach(function (delBtn) {
        delBtn.addEventListener('click', function (event) {
            basketContents.delContent(event.target.dataset.id);
        })
    })
}

let basketContents = {
    content: {

    },

    addContent(id, name, price) {
        if (this.content[id] === undefined) {
            this.content[id] = {
                id: id,
                name: name,
                price: price,
                count: 1,
            }
        } else {
            this.content[id].count++
        }
        basketVisibility.buildBasket()
    },

    delContent(id) {
        console.log(this.content[id]);
        console.log(this.content[id]);
        if (this.content[id].count === 1) {
            delete this.content[id];
        } else {
            this.content[id].count--;
        }

        basketVisibility.buildBasket()
    },



}
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
        for (i = 0; i++; i < 4) {
            console.log((basketContents.content[i] !== undefined));
            if (basketContents.content[i] !== undefined) {
                let basketRow = document.createElement('div');
                basketRow.classList.add('basketRow');
                basket.insertAdjacentElement('beforeend', basketRow);

                let basketRowID = document.createElement('div');
                basketRowID.classList.add('id');
                basketRowID.innerText = `${basketContents.content[i].id}`;
                basket.insertAdjacentElement('beforeend', basketRowID);

                let basketRowName = document.createElement('div');
                basketRowName.classList.add('Name');
                basketRowName.innerText = `${basketContents.content[i].name}`;
                basket.insertAdjacentElement('beforeend', basketRowName);

                let basketRowPrice = document.createElement('div');
                basketRowPrice.classList.add('price');
                basketRowPrice.innerText = `${basketContents.content[i].price}`;
                basket.insertAdjacentElement('beforeend', basketRowPrice);

                let basketRowCount = document.createElement('div');
                basketRowCount.classList.add('count');
                basketRowCount.innerText = `${basketContents.content[i].count}`;
                basket.insertAdjacentElement('beforeend', basketRowCount);

                let basketRowDelete = document.createElement('div');
                basketRowDelete.classList.add('fas fa-trash-alt delete');
                basketRowDelete.setAttribute('data-id', '3');
                basket.insertAdjacentElement('beforeend', basketRowDelete);

            }
        }
    },
}

// Слушаем клики по кнопкам "В корзину"
let buyBtns = document.querySelectorAll('.buy');
buyBtns.forEach(function (buyBtn) {
    buyBtn.addEventListener('click', function (event) {
        let id = event.target.dataset.id;
        let price = event.target.dataset.price;
        let name = event.target.dataset.name;
        basketContents.addContent(id, price, name);
    })
})




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



}
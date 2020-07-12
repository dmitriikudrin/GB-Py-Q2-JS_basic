document.head.insertAdjacentHTML("afterbegin", '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">');

let slider = document.querySelector('.slider');

let loadIcon = document.createElement('i');
loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
slider.insertAdjacentElement('afterbegin', loadIcon);

let leftIcon = document.createElement('i');
leftIcon.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftIcon');
slider.insertAdjacentElement('beforeend', leftIcon);

let rightIcon = document.createElement('i');
rightIcon.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightIcon');
slider.insertAdjacentElement('beforeend', rightIcon);

function sliderSize(slider) {
    let height = slider.getAttribute('data-height');
    let width = slider.getAttribute('data-width');
    if ((height !== null) && (height !== '')) {
        slider.style.height = height;
    }
    if ((width !== null) && (width !== '')) {
        slider.style.width = width;
    }
}

sliderSize(slider);

window.addEventListener('load', function () {
    leftIcon.addEventListener('click', function () {
        images.showPreviousSlide();
    });

    rightIcon.addEventListener('click', function () {
        images.showNextSlide();
    });

    hideLoadIcon(loadIcon);
    images.init();
})


function hideLoadIcon(loadIcon) {
    loadIcon.style.display = 'none';
}

let images = {
    currentIndex: 0,

    slides: [],

    init() {
        this.slides= document.querySelectorAll('.slider-item');
        this.showCurrentSlide();
    },

    hideCurrentSlide() {
        this.slides[this.currentIndex].classList.add('slide-hidden');
    },

    showCurrentSlide() {
        this.slides[this.currentIndex].classList.remove('slide-hidden');

    },

    showNextSlide() {
        const previousSlide = this.slides[this.currentIndex];
        if (this.currentIndex === (this.slides.length - 1)) {
            this.currentIndex = 0;
        } else {
            this.currentIndex ++
        }
        const nextSlide = this.slides[this.currentIndex];

        nextSlide.style.zIndex = ('2');
        nextSlide.classList.add('slider-animation-showToRight');
        nextSlide.classList.remove('slide-hidden');
        setTimeout(() => {
            nextSlide.classList.remove('slider-animation-showToRight');
            previousSlide.classList.add('slide-hidden');
            nextSlide.style.zIndex = ('1');
        }, 500);
    },

    showPreviousSlide() {
        const previousSlide = this.slides[this.currentIndex];
        if (this.currentIndex === 0) {
            this.currentIndex = this.slides.length - 1;
        } else {
            this.currentIndex --;
        }
        const nextSlide = this.slides[this.currentIndex];

        nextSlide.style.zIndex = ('2');
        nextSlide.classList.add('slider-animation-showToLeft');
        nextSlide.classList.remove('slide-hidden');
        setTimeout(() => {
            nextSlide.classList.remove('slider-animation-showToLeft');
            previousSlide.classList.add('slide-hidden');
            nextSlide.style.zIndex = ('1');
        }, 500);
    }
}
'use strict'

const carouselItems = document.querySelectorAll('.carousel__item');
let currentIndex = 1; 

function updateClasses() {
    carouselItems.forEach((item) => {
        item.classList = 'carousel__item'; 
    });

    const leftIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    const rightIndex = (currentIndex + 1) % carouselItems.length;
    const hiddenRightIndex = (currentIndex + 2) % carouselItems.length;

    carouselItems[currentIndex].classList.add('carousel__item--main');
    carouselItems[leftIndex].classList.add('carousel__item--left');
    carouselItems[rightIndex].classList.add('carousel__item--right');
    carouselItems[hiddenRightIndex].classList.add('carousel__item--hidden');
}

document.getElementById('rightBtn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    window.requestAnimationFrame(updateClasses);
});

document.getElementById('leftBtn').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    window.requestAnimationFrame(updateClasses);
});

let startX = 0;
let endX = 0;
const threshold = 50;

document.querySelector('.carousel').addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});

document.querySelector('.carousel').addEventListener('touchend', (event) => {
    endX = event.changedTouches[0].clientX;
    if (startX > endX + threshold) {
        rightBtn.click();
    } else if (startX < endX - threshold) {
        leftBtn.click();
    }
});
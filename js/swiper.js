"use strict";

function swipper() {
    let initialX = null;
    const threshold = 30; // Пороговое значение для определения жеста
    const specificBlock = document.getElementById('swipper');
    let arraySlide = Array.from(document.querySelectorAll('.hero-inf'));
    let indexSlide = 0;
    let arryBtn = Array.from(document.querySelectorAll('.hero-btn'));
    let indexBtn = 0

    // слайды и кнопки по дефолту
    arryBtn[indexBtn].classList.add('active')
    arraySlide[indexSlide].classList.add('active');

    // логика перемещения слайдов

    function changeSlideNext() {
        if (indexSlide < arraySlide.length - 1) {
            arraySlide[indexSlide].classList.remove('active');
            indexSlide++
            arraySlide[indexSlide].classList.add('active');
            arryBtn[indexBtn].classList.remove('active');
            indexBtn++
            arryBtn[indexBtn].classList.add('active');
        } else {
            arraySlide[indexSlide].classList.remove('active');
            indexSlide = 0;
            arraySlide[indexSlide].classList.add('active');
            arryBtn[indexBtn].classList.remove('active');
            indexBtn = 0;
            arryBtn[indexBtn].classList.add('active');
        }
    };

    function changeSlidePrev() {
        if (indexSlide > 0) {
            arraySlide[indexSlide].classList.remove('active');
            indexSlide--;
            arraySlide[indexSlide].classList.add('active');
            arryBtn[indexBtn].classList.remove('active');
            indexBtn--
            arryBtn[indexBtn].classList.add('active');
        } else {
            arraySlide[indexSlide].classList.remove('active');
            indexSlide = arraySlide.length - 1;
            arraySlide[indexSlide].classList.add('active');
            arryBtn[indexBtn].classList.remove('active');
            indexBtn = arryBtn.length - 1;
            arryBtn[indexBtn].classList.add('active');
        }
    }

    // обработка события свайпа в приделах зоны свайпера

    specificBlock.addEventListener('touchstart', function(event) {
        initialX = event.touches[0].clientX;
    });

    specificBlock.addEventListener('touchmove', function(event) {
        if (initialX === null) {
            return;
        }

        let currentX = event.touches[0].clientX;
        let diffX = currentX - initialX;

        if (Math.abs(diffX) > threshold) {
            if (diffX > 0) {
                changeSlidePrev();
            } else {
                changeSlideNext();
            }
            initialX = null; // Сброс значения initialX после обработки жеста
        }
    });

    // Обработка нажатия на кнопки на десктопе

    const tabsBtn = document.querySelectorAll('.hero-btn');
    const tabsCont = document.querySelectorAll('.hero-inf');

    tabsBtn.forEach(function(item) {
        item.addEventListener('click', function() {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute('data-target');
            let currentTab = document.querySelector(tabId);

            if (!currentBtn.classList.contains('active')) {
                tabsBtn.forEach(function(item) {
                    item.classList.remove('active');
                });

                tabsCont.forEach(function(item) {
                    item.classList.remove('active');
                });

                currentBtn.classList.add('active');
                currentTab.classList.add('active');
            }

        });
    });
}

swipper();
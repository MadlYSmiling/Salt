let menuBtn = document.querySelector('.burger-menu__btn');

let menuList = document.querySelector('.burger-menu__list');

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active')

    menuList.classList.toggle('active')
});

menuList.addEventListener('click', function() {
    menuBtn.classList.toggle('active')

    menuList.classList.toggle('active')
});
const popupBtn = document.querySelector('.__video-btn');
const popupContent = document.querySelector('.popup-video');

popupBtn.addEventListener('click', function() {
    popupContent.classList.add('popup-active');
});

popupContent.addEventListener('click', function() {
    popupContent.classList.remove('popup-active');
});
let currentIndex = 0;
const carousel = document.querySelector('.carousel');
const totalImages = document.querySelectorAll('.carousel img').length;

function moveRight() {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
        updateCarouselPosition();
    } else {
        currentIndex = 0; // Loop back to the start
        updateCarouselPosition();
    }
}

function moveLeft() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarouselPosition();
    } else {
        currentIndex = totalImages - 1; // Loop back to the end
        updateCarouselPosition();
    }
}

function updateCarouselPosition() {
    const imageWidth = document.querySelector('.carousel img').clientWidth;
    carousel.style.transform = `translateX(-${imageWidth * currentIndex}px)`;
}

document.getElementById("menuIcon").addEventListener("click", function() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("show-mobile-menu");
});


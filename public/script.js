let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    document.querySelector('.slider').style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto-advance slides every 5 seconds
setInterval(() => moveSlide(1), 5000);
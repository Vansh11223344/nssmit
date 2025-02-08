var currentSlide = 0;
var slides = document.querySelectorAll('.slide');
var totalSlides = slides.length;

function showSlide(index) {
    var slider = document.querySelector('.slides');
    slider.style.transform = `translateX(-${index * 100}%)`; // Move slider based on index

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// Move to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Move to the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Auto-slide every 5 seconds
var autoSlide = setInterval(nextSlide, 4000);

function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 4000);
}

// Button event listeners
document.querySelector('.next').addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
});

// Initial slide setup
showSlide(currentSlide);

   // Toggle the menu when the button is clicked
   document.getElementById('menuToggle').addEventListener('click', function() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active'); // Toggle the 'active' class
});

// Close the menu when a link is clicked (optional enhancement)
const navMenu = document.getElementById('navMenu');
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active'); // Close the menu when a link is clicked
    });
});
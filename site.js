const menuIcon = document.querySelector('.menu-icon')
const container = document.querySelector('.container')

menuIcon.addEventListener("click",()=>{
    container.classList.toggle("navigate")
})

const slider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slide')
const leftArrow = document.querySelector('.controls i:nth-child(1)')
const rightArrow = document.querySelector('.controls i:nth-child(2)')
const dotsWrapper = document.querySelector('.dots')
const dots = document.querySelectorAll('.dots span')

let slideIndex = 0

const totalSlides = slides.length;

function updateSlider() {
    const translatePercentage = -(slideIndex * 100) / totalSlides;
    slider.style.transform = `translateX(${translatePercentage}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === slideIndex);
    });
}


leftArrow.addEventListener("click", () => {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    updateSlider();
});


rightArrow.addEventListener("click", () => {
    slideIndex++;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    updateSlider();
});


dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        slideIndex = i; 
        updateSlider();
    });
});

updateSlider();
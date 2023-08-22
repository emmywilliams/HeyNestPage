const sliderContainer = document.querySelector(".slider-container");
const sliderItems = document.querySelectorAll(".slider-item");
const itemWidth = sliderItems[0].clientWidth;

let currentIndex = 0;

function updateSlider() {
  sliderContainer.style.transform = `translateX(-${
    currentIndex * itemWidth
  }px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % sliderItems.length;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
  updateSlider();
}

updateSlider();
setInterval(nextSlide, 5000); // Auto slide every 5 seconds

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

// chat pop up
const chatPopup = document.querySelector(".chat-popup");
const closeChatBtn = document.querySelector(".close-chat-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    chatPopup.classList.add("active");
  } else {
    chatPopup.classList.remove("active");
  }
});

// close button
closeChatBtn.addEventListener("click", () => {
  chatPopup.classList.remove("active");
});

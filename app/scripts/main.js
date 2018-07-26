//Slider DOM
var sliderButtons = document.querySelectorAll(".slider__btn");
var slides = document.querySelectorAll(".slider__slide");
var slideIndex = 1;

//Slider Event Hnadlers
sliderButtons.forEach(function(button) {
  button.addEventListener("click", changeSlide);
});

//Change Slide on click
function changeSlide(event) {
  slideIndex = parseInt(event.target.getAttribute("data-slide"));
  showSlide(slideIndex);
}

function showSlide(slideIndex) {
  slides.forEach(function(slide) {
    slide.style.display = "none";
  });
  console.log(slideIndex - 1);
  slides[slideIndex - 1].style.display = "block";
}

showSlide(slideIndex);

let currentIndex = 0;

function moveSlide(direction) {
  const track = document.querySelector(".carousel-track"); 
  
  const slides = document.querySelectorAll(".slide"); 

  currentIndex += direction;

  if (currentIndex < 0) currentIndex = slides.length - 1;
  if (currentIndex >= slides.length) currentIndex = 0;

  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}
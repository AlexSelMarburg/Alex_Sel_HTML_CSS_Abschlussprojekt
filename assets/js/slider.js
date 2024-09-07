const next = document.getElementById("slider-next-btn");
const prev = document.getElementById("slider-prev-btn");
const slider = document.getElementById("slider");

next.addEventListener("click", () => {
  const slides = document.querySelectorAll(".slides");
  slider.appendChild(slides[0]);
});

prev.addEventListener("click", () => {
  const slides = document.querySelectorAll(".slides");
  slider.prepend(slides[slides.length - 1]);
});

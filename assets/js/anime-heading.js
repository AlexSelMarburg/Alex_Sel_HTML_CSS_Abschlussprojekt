// Wrap every letter in a span
let textWrapper = document.querySelector(".main-heading .anime-text-1");

textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='anime-text-1'>$&</span>"
);

let textWrapper2 = document.querySelector(".main-heading .anime-text-2");
textWrapper2.innerHTML = textWrapper2.textContent.replace(
  /\S/g,
  "<span class='anime-text-2'>$&</span>"
);

let textWrapper3 = document.querySelector(".main-heading .anime-text-3");
textWrapper3.innerHTML = textWrapper3.textContent.replace(
  /\S/g,
  "<span class='anime-text-3'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".main-heading .anime-text-1",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2000,
    delay: (el, i) => 120 * (i + 1),
  })
  .add({
    targets: ".main-heading .anime-text-2",
    opacity: [0, 1],
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 850,
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".main-heading .anime-text-3",
    opacity: [0, 1],
    scale: [0.6, 1],
    duration: 1000,
    easing: "easeOutExpo",
    delay: 100,
  })
  .add({
    targets: ".main-heading .anime-text-4",
    opacity: [0, 1],
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".main-heading",
    opacity: 0,
    duration: 300,
    easing: "easeOutExpo",
    delay: 15000,
  });

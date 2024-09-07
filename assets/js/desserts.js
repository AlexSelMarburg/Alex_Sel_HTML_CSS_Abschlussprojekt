window.addEventListener("DOMContentLoaded", (e) => {
  if ("ontouchstart" in document.documentElement) {
    const cards = document.querySelectorAll(
      "#desserts-container .dessert-card"
    );
    cards.forEach((card) => card.vanillaTilt.destroy());
  }
});

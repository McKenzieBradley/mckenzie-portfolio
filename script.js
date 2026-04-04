window.addEventListener('DOMContentLoaded', () => {

  const carousel = document.querySelector('.carousel');
  const leftArrow = document.getElementById('leftArrow');
  const rightArrow = document.getElementById('rightArrow');

  function updateArrows() {
    const scrollLeft = carousel.scrollLeft;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    if (scrollLeft <= 0) {
      leftArrow.style.opacity = "0";
      leftArrow.style.pointerEvents = "none";
    } else {
      leftArrow.style.opacity = "1";
      leftArrow.style.pointerEvents = "auto";
    }

    if (scrollLeft >= maxScroll - 5) {
      rightArrow.style.opacity = "0";
      rightArrow.style.pointerEvents = "none";
    } else {
      rightArrow.style.opacity = "1";
      rightArrow.style.pointerEvents = "auto";
    }
  }

  function scrollRightArrow() {
    carousel.scrollBy({
      left: 400,
      behavior: 'smooth'
    });
  }

  function scrollLeftArrow() {
    carousel.scrollBy({
      left: -400,
      behavior: 'smooth'
    });
  }

  // Make functions global so HTML onclick works
  window.scrollRightArrow = scrollRightArrow;
  window.scrollLeftArrow = scrollLeftArrow;

  carousel.addEventListener('scroll', updateArrows);
  updateArrows();

});

function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");

  lightbox.style.display = "flex";
  img.src = src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
const slides = document.querySelectorAll('.slide');

function removeActive () {
  slides.forEach(slide => {
    slide.classList.remove('active')
  })
}

slides.forEach(slide => slide.addEventListener('click', () => {
  removeActive();
  slide.classList.add('active')
}))
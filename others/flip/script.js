const card = document.querySelector('.card_inner');
card.addEventListener('click', () => {
   card.classList.toggle('is-flipped');
});
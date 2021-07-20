const abrir = document.querySelector('[data-login="entrar"]')
const modal = document.querySelector('[data-modal="modal"]')
if (abrir && modal) {
   function toggleModal(event) {
      event.preventDefault();
      modal.classList.add('ative')
   }
   function feixo(event) {
      toggleModal(event)
      if (event.target === this) {
         modal.classList.remove('ative')
      }
   }
   abrir.addEventListener('click', toggleModal)
   modal.addEventListener('click', feixo)
}

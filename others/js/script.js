const menu = document.querySelector('.humburguer-menu')

function EfeitoPortifolio() {
   const menuHamburg = document.querySelector(".li")
   const menuRemove = document.querySelector('.menu')
   const menuOculto = document.querySelector('.menuOculto')
   const bg = document.querySelector('.bg')
   this.ativar = function () {
      menu.addEventListener('click', () => {

         bg.classList.add('ative')
         menuHamburg.classList.add('ative')
         menuRemove.classList.add('remove')
         menuOculto.classList.add('ative')
         const close = document.querySelector(".bar")
         close.innerText = "Fechar"
      })
   }
   this.desativar = function () {
      const hamburguer = document.querySelector('.humburguer')
      hamburguer.addEventListener('click', () => {
         bg.classList.remove('ative')
         menuHamburg.classList.remove('ative')
         menuRemove.classList.remove('remove')
         menuOculto.classList.remove('ative')
      })
   }
}

const ativarEfeito = new EfeitoPortifolio();
ativarEfeito.ativar()
ativarEfeito.desativar()

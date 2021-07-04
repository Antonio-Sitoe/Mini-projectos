const sections = document.querySelectorAll('section')
sections.forEach(section => section.addEventListener('click', ShowP))

function ShowP() {
    const that = this
    const p = that.querySelector('p');
    p.classList.toggle('ative')
}
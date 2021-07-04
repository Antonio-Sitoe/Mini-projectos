export default class error {
  constructor() {
    this.form = document.querySelector("[data-input]");
  }
  error(campo, msg) {
    const p = document.createElement("p");
    this.posiction(p);
    p.classList.add("error");
    p.innerText = msg;

    campo.insertAdjacentElement("afterend", p);
  }

  posiction(p) {
    const get = this.form.getBoundingClientRect();
    p.style.left = get.left + "px";
    p.style.bottom = 0 + "px";
  }
}

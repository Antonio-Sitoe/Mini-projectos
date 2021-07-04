export default class ValidaForm {
  constructor(selector) {
    this.form = document.querySelectorAll(selector);
  }

  getValid() {
    const date = document.querySelector("#date");

    document.addEventListener("keypress", (e) => {
      if (e.keyCode === 13) {
        console.log(date.value);
      }
    });
  }
}

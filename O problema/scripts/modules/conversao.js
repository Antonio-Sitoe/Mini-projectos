import error from "./error.js";

export default class Conversao {
  constructor() {
    this.form = document.querySelector("[data-input]");
    this.select = document.querySelectorAll("select");
  }

  convert() {
    this.options();
    this.valida();
    this.selections();
    this.calculo()
  }

  valida() {
    this.form.addEventListener("keypress", () => {
      const value = +this.form.value;
      const msg = "Digite um numero valido";
      const p = document.querySelectorAll(".error");

      if (!Number.isNaN(value)) {
        p.forEach((p) => p.remove());
      } else {
        const er = new error();
        er.error(this.form, msg);

        if (p) {
          p.forEach((p) => p.remove());
        }
      }
    });
  }

  selections() {
    const selects = document.querySelector(".select1");
    selects.addEventListener("change", () => {
      const option = selects.options[selects.selectedIndex];

      // quero tirar o valor do option
      this.calcule(option.value);

      return option.value;
    });

    const selects2 = document.querySelector(".select2");
    selects2.addEventListener("change", () => {
      const option = selects2.options[selects2.selectedIndex];
      this.calcule2(option);
      // aqui tambem
      return option.value;
    });
  }
  calcule(option) {return option;}
  calcule2(option) {return option;}
  
  calculo() {
    // nao tem como fazer o calculo aqui desses dois numeros
    this.calcule(option) + this.calcule2(option);
  }

  get countrys() {
    const Country = (name, value) => ({
      name,
      value,
    });

    const dolar = Country("dollar", 55);
    const Rand = Country("Rand", 5.8);
    const Euro = Country("Euro", 148);
    const pound = Country("pound", 13.6);

    return { dolar, Rand, Euro, pound };
  }

  options() {
    const select = document.querySelectorAll("select");

    const opt = `<option value="${this.countrys.dolar.value}">
                          ${this.countrys.dolar.name}</option>

                          <option value="${this.countrys.Rand.value}">
                          ${this.countrys.Rand.name}</option>

                          <option value="${this.countrys.Euro.value}">
                          ${this.countrys.Euro.name}</option>


                          <option value="${this.countrys.pound.value}">
                          ${this.countrys.pound.name}</option>
                 `;

    select.forEach((option) => {
      option.innerHTML += opt;
    });

    return select;
  }
}

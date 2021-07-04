class Validar {
  constructor() {
    const input = document.querySelector("#input");
  }
  get event() {
    input.addEventListener("click", () => {
      document.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
            this.Display();
        }
      });
    });
  }

  valida() {
    if (!input.value) {
      input.focus();
      input.value = "";
      return alert("Digite uma data");
    }

    let clean = input.value.replace(/\D+/g, "");

    if (clean.length < 6) {
      input.focus();
      input.value = "";
      return alert("Digite uma data");
    }
    clean = clean.split("");
    clean.splice(2, 0, "/");
    clean.splice(5, 0, "/");
    return clean.join("");
  }

  get getTime() {
    const valida = this.valida();
    return new Date(valida);
  }

  get nowTime() {
    return new Date();
  }

  get diff() {
    const diff = this.getTime.getTime() - this.nowTime.getTime();
    return diff;
  }

  get Total() {
    const days = Math.floor(this.diff / (24 * 60 * 60 * 1000));
    const hours = Math.floor(this.diff / (60 * 60 * 1000));
    const minuts = Math.floor(this.diff / (60 * 1000));
    const seconds = Math.floor(this.diff / 1000);
    return { days, hours, minuts, seconds };
  }

  get getDays() {
    const days = this.Total.days % 24;
    const hours = this.Total.hours % 60;
    const minuts = this.Total.minuts % 60;
    const seconds = this.Total.seconds % 60;
    return { days, hours, minuts, seconds };
  }
  Display() {
    if (
      this.getDays.days < 0 &&
      this.getDays.hours < 0 &&
      this.getDays.minuts < 0
    ) {
      alert("Essa data e antiga");
    } else {
      alert(
        `Faltam ${this.getDays.days} dias e ${this.getDays.hours} horas e ${this.getDays.minuts} minutos e ${this.getDays.seconds}`
      );
    }
  }
}

const valida = new Validar();
valida.event();

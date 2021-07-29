export default class Validacao {
  constructor() {
    // this.password = document.querySelectorAll("[data-password]");
    this.email = document.querySelectorAll("[data-email]");
    // this.error = document.querySelector("[data-error]");
    // this.error2 = document.querySelector("[data-error2]");
    this.btn = document.querySelector("[data-get]");

    this.cadastrar = document.querySelector("[data-registrar]");

    this.form = document.querySelector("form.register");
    this.regis = document.querySelector(".regis");

    this.form1 = document.querySelector("[data-form-contaner]");

    this.forms = document.querySelectorAll(".inputs");
  }

  getSumbit() {
    this.register();
    this.login();
  }

  register() {
    this.regis.addEventListener("click", () => {
      const title = document.querySelector(".title");
      const help = (document.querySelector(".help").innerText = "");

      this.regis.innerText = "";
      this.form1.style.display = "none";

      this.form.classList.add("ative");

      title.innerText = "Cadastrar minha conta";
    });

    this.cadastrar.addEventListener("click", (e) => {
      e.preventDefault();
      this.verify(this.forms);
    });

    return;
  }

  verify(forms) {
    const ps = document.querySelectorAll(".error");
    let valid = true;

    ps.forEach((p) => {
      p.remove();
    });

    forms.forEach((input) => {
      if (!input.value) {
        valid = false;
        this.erro(input, "Esse campo precisa ser preenchido");
      } else {
        if (input.value.length < 4) {
          valid = false;
          this.erro(input, "Campo invalido, preencha correctamente");
        } else if (input === this.email[1]) {
          if (!input.value.includes("@")) {
            valid = false;
            this.erro(input, "Nome invalido, Digite um email valido");
          }
        }
      }
    });

    if (valid) {
      this.armazenar(forms);
      this.form.classList.remove("ative");
      this.form1.style.display = "grid";

      this.regis.innerText = "Novo na Netflix? Registra-se agora";
    }
    return valid;
  }

  armazenar(forms) {
    const list = [];

    const nomes = [];

    forms.forEach((input, index, arr) => {
      const inputValue = input.value;
      list.push(inputValue);
    });

    const get = JSON.parse(localStorage.getItem("dados", list));
    if (get !== null) {
      const obj = {
        name: get.name.concat(list[0]),
        email: get.email.concat(list[1]),
        senha: get.senha.concat(list[2]),
      };

      const jsonSt = JSON.stringify(obj);
      localStorage.setItem("dados", jsonSt);
    } else {
      const obj = {
        name: [list[0]],
        email: [list[1]],
        senha: [list[2]],
      };
      const jsonSt = JSON.stringify(obj);

      localStorage.setItem("dados", jsonSt);
    }
  }

  erro(campo, msg) {
    const p = document.createElement("p");
    p.classList.add("error");
    p.innerText = msg;
    p.style.color = "red";

    campo.insertAdjacentElement("afterend", p);
  }
  login() {
    this.btn.addEventListener("click", (e) => {
      e.preventDefault();
      const forms = document.querySelectorAll(".get");

      const ps = document.querySelectorAll(".error");
      let valid = true;

      ps.forEach((p) => {
        p.remove();
      });

      forms.forEach((input) => {
        if (!input.value) {
          valid = false;
          this.erro(input, "Esse campo precisa ser preenchido");
        } else {
          if (input.value.length < 4) {
            valid = false;
            this.erro(input, "Campo invalido, preencha correctamente");
          } else if (input === this.email[1]) {
            if (!input.value.includes("@")) {
              valid = false;
              this.erro(input, "Nome invalido, Digite um email valido");
            }
          }
        }
      });

      if (valid) {
        const teekLocalHost = JSON.parse(localStorage.getItem("dados"));

        if (teekLocalHost !== null) {
          let email = false;
          let senha = false;
          teekLocalHost.email.forEach((item) => {
            if (item === forms[0].value) {
              email = true;
              console.log("e igual entrea");
            }
          });

          teekLocalHost.senha.forEach((item) => {
            if (item === forms[1].value) {
              senha = true;
              console.log("e igual entra");
            }
          });

          if (senha && email) {
            document.location.href = "http://127.0.0.1:5501/app.html";

            console.log(true);
          } else {
            this.erro(
              forms[0],
              "Usuario invalido, faca o registro e volte a tentar"
            );
          }
        } else {
          this.erro(
            forms[0],
            "Usuario invalido, faca o registro e volte a tentar"
          );
        }
      }
    });
  }
}

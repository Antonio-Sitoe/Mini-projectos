class lolypop {
  constructor() {
    this.list = document.querySelector("form");
    this.events();
  }

  events() {
    const btnAdd = this.list.querySelector("[data-add]");
    const cadas = this.list.querySelector("[data-cadastrar]");

    btnAdd.addEventListener("click", (e) => this.addEvent(e));
    cadas.addEventListener("click", (e) => this.cadastrar(e));
  }
  addEvent(e) {
    const nodelist = document.querySelectorAll(".inputs");

    const p = document.querySelectorAll("p");
    p.forEach((ps) => {
      ps.remove();
    });
    const verify = this.verifyEvents(nodelist, e);

    if (verify) {
      const send = this.sendEvent();
      if (send) {
        this.armazena();
      }
    }
  }
  cadastrar() {
    console.log("regsteri");
  }

  verifyEvents(nodelist, e) {
    e.preventDefault();
    let value = true;
    nodelist.forEach((input) => {
      let msg = `Esse campo precisa de ser preenchido`;
      if (!input.value) {
        value = false;
        this.error(input, msg);
      } else {
        if (input.classList.contains("email")) {
          if (!input.value.includes("@")) {
            this.error(input, "O seu email deve conter @");
            value = false;
          }
        }
        if (input.value.length < 4) {
          this.error(input, "Digite este campo corretamente");
          value = false;
        }
      }
    });

    return value;
  }

  sendEvent() {
    const name = this.list.querySelector('[name="nome"]').value;
    const email = this.list.querySelector('[name="Email"]').value;
    const profisao = this.list.querySelector('[name="Profissiao"]').value;
    return { name, email, profisao };
  }

  armazena() {
    const nome = document.createElement("div");
    const email = document.createElement("div");
    const profisao = document.createElement("div");

    nome.classList.add("nome", "t");
    email.classList.add("email", "t");
    profisao.classList.add("profisao", "t");

    nome.innerText = this.sendEvent().name;
    email.innerText = this.sendEvent().email;
    profisao.innerText = this.sendEvent().profisao;

    const info = document.querySelector(".info");
    info.appendChild(nome);
    info.appendChild(email);
    info.appendChild(profisao);

    const save = Array.from(document.querySelectorAll(".t"));
    const salv = [];
    let ac = [];

    for (let i = 0; i < save.length; i++) {
      let sv = save[i].innerText;
      salv.push(sv);
    }
    // for (let item of save) {
    //   let saves = item.innerText;
    //   salv.push(saves);
    // }

    // const stringJson = JSON.stringify(salv);
    // localStorage.setItem("info", stringJson);

    // console.log(salv);
  }

  error(input, msg) {
    const p = document.createElement("p");
    p.style.fontSize = "12px";
    p.style.color = "red";
    p.innerText = msg;
    input.insertAdjacentElement("afterend", p);
  }
}

const lol = new lolypop();

// [x] add butoes e funcoes
//  [x] funcao add

// [] verificar se tem algo primeiro em tudo
// no email verificar se tem o aroba apenas
// verificar que o lengt deles nao e menor que 4 letras

// armazenar essas informacoes em objectos

// depois armazenar as informacoes em um vetor

// depois armazenar as informacoes no local storage

// [] funcionalidade de tirar o formulairio ao clicar no ver cadatros
// [] trazer as informacoes que estao armazenadas no front;

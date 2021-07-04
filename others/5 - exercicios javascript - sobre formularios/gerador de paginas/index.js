(() => {
  const form = document.querySelector("form");

  const btnPreview = document.querySelector("[data-preview]");
  const btnGerar = document.querySelector("[data-gerar]");

  btnPreview.addEventListener("click", handleEvent);
  btnGerar.addEventListener("click", handleGerar);

  function handleEvent(e) {
    e.preventDefault();
    const inputs = form.querySelectorAll("input");
    const p = document.querySelectorAll("p");
    p.forEach((ps) => ps.remove());

    const verifica = verify(inputs);

    if (verifica) {
      const div = document.querySelector(".newPage");
      if (div) {
        document.querySelector(".newPage").remove();
      }
      sendInfo();
    }
  }

  function sendInfo() {
    const div = document.createElement("div");
    div.classList.add("newPage");
    const landing = landingPage();
    div.innerHTML = landing;

    const content = document.querySelector(".content");
    content.classList.add("ative");
    content.appendChild(div);

    content.addEventListener("click", () => {
      btnPreview.removeEventListener("click", handleEvent);
    });
    return div;
  }

  function verify(inputs) {
    let valid = true;
    inputs.forEach((input) => {
      if (!input.value) {
        valid = false;
        erro(input, "Esse campo precisa de ser escrito");
      } else {
        if (input.classList.contains("p")) {
          if (input.value.length < 100) {
            valid = false;
            erro(input, "Digite um texto valido");
          }
        }
      }
    });
    return valid;
  }

  function erro(campo, msg) {
    const p = document.createElement("p");
    p.classList.add("ps");
    p.innerText = msg;
    campo.insertAdjacentElement("afterend", p);
  }
  function handleGerar() {}

  function landingPage() {
    const title = document.querySelector("#title").value;

    const titulo = document.querySelector("#titulo").value;
    const paragraph1 = document.querySelector("#paragraph1").value;

    const subtitulo1 = document.querySelector("#subtitulo1").value;
    const paragraph2 = document.querySelector("#paragraph2").value;

    const subtitulo2 = document.querySelector("#subtitulo2").value;
    const paragraph3 = document.querySelector("#paragraph3").value;

    const colorText = document.querySelector("#color").value;
    const colorTitle = document.querySelector("#colorTitle").value;

    const template = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <style>
          h1 {
            <p></p>
            color: ${colorTitle};
          }
    
          h3 {
            color:${colorTitle} ;
          }
    
          p {
            color: ${colorText};
          }
    
          .container {
            padding: 60px;
            margin: 50px auto;
            max-width: 800px;
            background-color: whitesmoke;
          }
    
        </style>
      </head>
      <body>
        <div class="container">
          <h1>${titulo}</h1>
          <p>${paragraph1}</p>
    
          <hr />
          <h3>${subtitulo1}</h3>
          <p>${paragraph2}</p>
    
          <hr />
          <h3>${subtitulo2}</h3>
          <p>${paragraph3}</p>
        </div>
    
      </body>
    </html>`;

    return template;
  }
})();

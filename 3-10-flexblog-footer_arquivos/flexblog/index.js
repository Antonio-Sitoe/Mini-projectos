
fetch('pessoas.json')
.then(url => url.json())
.then(json=>show(json))

const show = (json) => {
  const qualidade = document.querySelector(".qualidade-item");
  const qualidadeBody = document.querySelector("#qualidade");
  let p = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, qui quos accusantium modi ea accusamus, natus soluta quisquam ratione quaerat exercitationem culpa sunt ducimus corrupti aliquam quis numquam debitis veritatis?`;

  for (let item of json) {
    const clone = qualidade.cloneNode(true);
    const nome = (clone.querySelector("h2").innerText = item.nome);
    const foto = clone.querySelector("img");
    // foto.setAttribute("src", faq[item].url);
    const empresa = (clone.querySelector(".em").innerText = item.empresa);
    const salario = (clone.querySelector(".sal").innerText = item.salario);
    const post = item.body === undefined ? p : item.body;
    const descricao = (clone.querySelector(".descricao").innerText = post);
    const email = (clone.querySelector(".email").innerText = item.email);

    qualidadeBody.appendChild(clone);
  }

  qualidade.remove();
};

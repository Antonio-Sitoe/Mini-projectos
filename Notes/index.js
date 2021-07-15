const div = document.querySelector("#div");

const questions = {
  aswer: {
    question: "O que e mocambique",
    a: "pais",
    b: "country",
    c: "proincia",
    resposta: "pais",
  },
  aswer1: {
    question: "1+1",
    a: "3",
    b: "2",
    c: "4",
    resposta: "2",
  },
};

const make = `<h1>${questions.aswer.question}</h1>
<button>${questions.aswer.a}</button>
<button>${questions.aswer.b}</button>
<button>${questions.aswer.c}</button>`;


div.innerHTML = make;

const buttons = document.querySelectorAll("button");



buttons.forEach((item) =>
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const el = e.target;
    if (el.innerText === questions.aswer.resposta) {
      console.log("acertpu");
    }
  })
);

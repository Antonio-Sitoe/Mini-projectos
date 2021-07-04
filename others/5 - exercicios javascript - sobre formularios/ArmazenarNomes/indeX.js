function Lolypop() {
  this.list = document.querySelector("form");
  this.events();
}

Lolypop.prototype.events = function () {
  const btnAdd = this.list.querySelector("[data-add]");
  const cadas = this.list.querySelector("[data-cadastrar]");

  btnAdd.addEventListener("click", this.addEvent);
  cadas.addEventListener("click", this.cadastrar);
};
Lolypop.prototype.addEvent = function () {
  const nodelist = document.querySelectorAll(".inputs");

  return verifyEvents(nodelist);
};
Lolypop.prototype.cadastrar = function () {
  console.log("regsteri");
};

Lolypop.prototype.verifyEvents = function (nodelist) {
  console.log(nodelist);
};

const loly = new Lolypop();

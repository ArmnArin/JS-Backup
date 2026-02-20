const CONTACTS = ["sana", "hani", "arman", "peyman"];
const ul = document.querySelector("ul");
const btn = document.querySelector("button");
const input = document.querySelector("input");

const render = () => {
  const template = CONTACTS.map((contact) => `<li>${contact}</li>`);
  ul.innerHTML = template.join(" ");
};
const handleAdd = () => {
  CONTACTS.push(input.value);
  render();
};

window.addEventListener("load", render);
btn.addEventListener("click", handleAdd);

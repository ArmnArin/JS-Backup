const CONTACTS = ["sana", "hani", "arman", "peyman"];
const ul = document.querySelector("ul");
const btn = document.querySelector("button");
const input = document.querySelector("input");
const span = document.querySelector("span");
const allBtn = document.querySelector("span.all");

const render = (list) => {
  const template = list.map((contact) => `<li>${contact}</li>`);
  ul.innerHTML = template.join(" ");
};
const handleAdd = () => {
  CONTACTS.push(input.value);
  render(CONTACTS);
};
const handleFilter = () => {
  const filteredList = CONTACTS.filter((contact) =>
    contact.startsWith(span.textContent)
  );
  console.log(filteredList);
};

window.addEventListener("load", () => {
  render(CONTACTS);
});
btn.addEventListener("click", handleAdd);
span.addEventListener("click", handleFilter);
allBtn.addEventListener("click", () => {
  render(CONTACTS);
});

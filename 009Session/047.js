const TODOS = [
  {
    id: 1,
    title: "running",
    isDone: true,
  },
  {
    id: 2,
    title: "shopping",
    isDone: true,
  },
  {
    id: 3,
    title: "playing piano",
    isDone: false,
  },
];

const ul = document.querySelector("ul");

const render = () => {
  const template = TODOS.map((todo) => `<li class='${todo.isDone ? 'done' : 'undone'}'>${todo.title}</li>`);
  ul.innerHTML = template;
};

window.addEventListener("load", render);

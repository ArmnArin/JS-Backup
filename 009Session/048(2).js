const btn = document.querySelector("button");

const render = (producdtList) => {
  const template = producdtList.map((product) => {
    return ` <div class="card">
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p>Category: ${product.category}</p>
            <p>${product.price}</p>
        </div>`;
  });

  document.getElementById("root").innerHTML = template.join("");
};

const handleFilter = () => {
  const result = PRODUCTS.filter(
    (product) => product.category === "men's clothing"
  );
  render(result);
};

window.addEventListener("load", () => {
  render(PRODUCTS);
});
btn.addEventListener("click", handleFilter);

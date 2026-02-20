const modal = document.getElementById("modal-container");

const handleChangeTheme = (theme) => {
  localStorage.setItem("theme", theme);
  if (theme === "light") {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  }
};

const handleCloseModal = () => {
  modal.classList.remove("active");
};

window.addEventListener("load", () => {
  const value = localStorage.getItem("them") || "light";
  handleChangeTheme(value);

  setTimeout(() => {
    const isModalSeen = localStorage.getItem("isModalSeen");

    if (isModalSeen === "true") {
      modal.classList.add("active");
      localStorage.setItem("isModalSeen", "true");
    }
  }, 1000);
});

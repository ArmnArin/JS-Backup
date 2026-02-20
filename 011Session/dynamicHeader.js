const header = document.querySelector("header");

const handleScroll = () => {
  if (window.scrollY > 400) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
};

window.addEventListener("scroll", handleScroll);

const CIRCLE = document.getElementById("circle");

const handleTrackCircle = (event) => {
  const x = event.clientX;
  const y = event.clientY;

  const windowX = window.innerWidth;
  const windowY = window.innerHeight;

  CIRCLE.style.transform = `translate(-${(windowX - x)/12}px,-${(windowY - y)/12}px)`;
};

window.addEventListener("mousemove", handleTrackCircle);

let flag = true;
function dark_light() {
  const btSwitch = document.getElementById("switch");
  const text = document.getElementById("text");
  if (flag) {
    document.body.style.backgroundColor = "black";
    text.style.color = "white";
    btSwitch.textContent = "Light";
    flag = false;
  } else {
    document.body.style.backgroundColor = "gray";
    text.style.color = "black";
    btSwitch.textContent = "Dark";
    flag = true;
  }
}

function passwordGenerator() {
  let password = " ";
  for ( i = 0; i < 6; i++) {
    const char = String.fromCharCode(Math.floor(Math.random() * 25 + 97));
    password += char;
  }
  const text = document.getElementById("text");
  text.textContent = password;
}

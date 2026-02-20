function otp() {
  let otpNumber = "";
  for (let i = 0; i < 6; i++) {
    const number = String(Math.floor(Math.random() * 10));
    otpNumber += number;
  }
  const text = document.getElementById("text");
  text.textContent = otpNumber;
  // const number1 = String(Math.floor(Math.random() * 10));
  // const number2 = String(Math.floor(Math.random() * 10));
  // const number3 = String(Math.floor(Math.random() * 10));
  // const number4 = String(Math.floor(Math.random() * 10));
  // const number5 = String(Math.floor(Math.random() * 10));
  // const number6 = String(Math.floor(Math.random() * 10));
  // text.textContent = number1 + number2 + number3 + number4 + number5 + number6;
}

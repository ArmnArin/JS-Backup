// این آرایه رو برای ذخیره کردن دو تا کارت نمایش داده شده و مقایسه اونها ایجاد کردیم
const OPEN_CARDS = [];

// dom nodes
const boxes = document.querySelectorAll("div");

//functions
function showCard() {
  // اضافه شدن کارت کلیک شده به کارت های باز
  OPEN_CARDS.push(this);
  //   نمایش کارت کلیک شده
  this.classList.add("show");

  // مقایسه دو تا کارت باز
  if (OPEN_CARDS.length === 2) {
    comparisonCards();
  }
}

function comparisonCards() {
  // مقایسه آیکونهای کارت های نمایش داده شده
  if (OPEN_CARDS[0].innerHTML === OPEN_CARDS[1].innerHTML) {
    // کارت های صحیح
    OPEN_CARDS[0].classList.add("green");
    OPEN_CARDS[1].classList.add("green");
    OPEN_CARDS.length = 0;
  } else {
    // کارت های غلط
    OPEN_CARDS[0].classList.add("red");
    OPEN_CARDS[1].classList.add("red");

    // غیر فعال کردن کلیک روی همه کارت ها
    disableAllCards();

    // برگردوندن کارت ها بعد از 2 ثانیه نمایش اون ها
    setTimeout(function () {
      OPEN_CARDS[0].classList.remove("show");
      OPEN_CARDS[1].classList.remove("show");
      OPEN_CARDS[0].classList.remove("red");
      OPEN_CARDS[1].classList.remove("red");
      OPEN_CARDS.length = 0;

      // فعال شدن کلیک روی کارت ها
      enableAllCards();
    }, 2000);
  }
}

function disableAllCards() {
  for (const box of boxes) {
    box.classList.add("pointer-none");
  }
}

function enableAllCards() {
  for (const box of boxes) {
    box.classList.remove("pointer-none");
  }
}

//events
for (const box of boxes) {
  box.addEventListener("click", showCard);
}

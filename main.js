let likes = Array.from(document.querySelectorAll(".fa-heart"));
let rm = Array.from(document.querySelectorAll(".fa-trash-can"));
let cards = Array.from(document.querySelectorAll(".card"));
let pls = Array.from(document.querySelectorAll(".plus-btn"));
let mis = Array.from(document.querySelectorAll(".minus-btn"));

// Like button

for (let like of likes) {
  like.addEventListener("click", function () {
    if (like.style.color === "black") {
      like.style.color = "red";
    } else {
      like.style.color = "black";
    }
  });
}

// Remove button

for (let i in rm) {
  rm[i].addEventListener("click", function () {
    cards[i].remove();
    total();
  });
}

// Plus button

for (let pl of pls) {
  pl.addEventListener("click", function () {
    pl.nextElementSibling.innerHTML++;
    total();
  });
}

// Minus button

for (let mi of mis) {
  mi.addEventListener("click", function () {
    if (mi.previousElementSibling.innerHTML > 0) {
      mi.previousElementSibling.innerHTML--;
    } else {
      null;
    }
    total();
  });
}

// Total price

function total() {
  let qt = Array.from(document.querySelectorAll(".qtte"));
  let price = Array.from(document.querySelectorAll(".unit-price"));
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    sum = sum + parseFloat(price[i].innerHTML) * parseFloat(qt[i].innerHTML);
  }
  document.getElementById("total-price").innerHTML = sum;
}

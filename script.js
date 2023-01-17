

"use strict";

const inputNum = document.getElementById("input");
const btn = document.getElementById("btn");
const newGame = document.getElementById("button");

let cursor = document.querySelector(".cursor");
let innerCursor = document.querySelector(".innercursor");

// cursor
document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = innerCursor.style.cssText =
    "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

let prevGues = document.getElementById("gues-game__span");
let randomNum = Math.floor(Math.random() * 10) + 1;
let userNum = +document.getElementsByTagName("input")[1].value;

console.log(randomNum);

newGame.addEventListener("click", () => {
  randomNum = Math.floor(Math.random() * 10) + 1;
  inputNum.value = "";
  btn.disabled = true;
  rightAns.setAttribute("style", "display: none");
  console.log(randomNum);
  // inputNum.setAttribute("style", "animation: outline 2s linear infinite alternate;");2
});

inputNum.addEventListener("keyup", (e) => {
  const value = e.currentTarget.value;

  if (value === "" && value == isNaN) {
    btn.disabled = true;
  } else if (value > 0) {
    btn.disabled = false;
  }
});

const rightAns = document.querySelector(".gues-game__ans");

btn.addEventListener("click", () => {
  userNum = +document.getElementsByTagName("input")[1].value;
  inputNum.value = "";
  btn.disabled = true;

  if (randomNum == userNum) {
    rightAns.setAttribute("style", "background: #00c91e");
    rightAns.textContent = "Congratulations! You got it right";
    inputNum.setAttribute(
      "style",
      "animation: success 2s linear 5 alternate !important"
    );
  } else if (userNum > 10) {
    rightAns.setAttribute("style", "background: #ff0f0f");
    rightAns.textContent = "Please, Enter a number less than 11";
    inputNum.setAttribute(
      "style",
      "animation: errorans 2s linear 5 alternate !important"
    );
  } else if (userNum <= 0) {
    rightAns.setAttribute("style", "background: #ff0f0f");
    rightAns.textContent = "Please, Enter a number greater than 0";
    inputNum.setAttribute(
      "style",
      "animation: errorans 2s linear 5 alternate !important"
    );
  } else {
    rightAns.setAttribute("style", "background: #ff0f0f");
    rightAns.textContent = "Error! You didn't find";
    inputNum.setAttribute(
      "style",
      "animation: errorans 2s linear 5 alternate !important"
    );
  }
  console.log(userNum);
  prevGues.innerHTML = `${userNum}`;
});

// toggle light/night

document.getElementById("toggle").addEventListener("click", function () {
  document.getElementsByTagName("body")[0].classList.toggle("dark-theme");
  document
    .getElementById("gues-game__wrapper")
    .classList.toggle("dark-theme-div");

  document.getElementById("cursor").classList.toggle("dark-theme-cursor");
});

// clock

const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
});

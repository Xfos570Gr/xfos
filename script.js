"use strict";

const allBtns = document.querySelectorAll(".btn");
const inputEl = document.querySelector(".input");
const delBtn = document.querySelector(".del-btn");
const equalBtn = document.querySelector(".equal");

let inputValue = "";

for (let i = 0; i < allBtns.length; i++) {
  allBtns[i].addEventListener("click", function () {
    inputValue = inputEl.value += allBtns[i].textContent;
  });
}

delBtn.addEventListener("click", function () {
  inputValue = inputValue.toString().slice(0, -1);
  inputEl.value = inputValue;
});

equalBtn.addEventListener("click", function () {
  inputValue = eval(inputEl.value);
  inputEl.value = inputValue;
});

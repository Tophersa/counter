"use strict";

let count = document.getElementById("count");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const rest = document.querySelector(".rest");
const clear = document.querySelector(".clear");
const inputArea = document.getElementById("inputArea");


let countValue = 0;
let total = 0;

inputArea.value = 0;

increase.addEventListener("click", function () {
  console.log("increase was clicked");
  total = total + Number(inputArea.value);
  count.textContent = `Total = ${total}`;
});

decrease.addEventListener("click", function () {
  console.log("decrease was clicked");

  total = total - Number(inputArea.value);
  count.textContent = `Total = ${total}`;
});

rest.addEventListener("click", function () {
  console.log("rest was clicked");
  prompt("Your saved total will be lost. Are you sure you want to rest?")
  total = 0;
  count.textContent = `Total = ${total}`;
  inputArea.value = 0;
});

clear.addEventListener("click", function () {
    console.log("clear was clicked");
    inputArea.value = 0;
  });

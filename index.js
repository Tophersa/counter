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
  total = total + Number(inputArea.value);
  count.textContent = `TOTAL = ${total}`;
});

decrease.addEventListener("click", function () {

  total = total - Number(inputArea.value);
  count.textContent = `TOTAL = ${total}`;
});

rest.addEventListener("click", function () {
  console.log("rest was clicked");
  const confrimation = confirm("Your saved total will be lost. Are you sure you want to continue?");

  if(confrimation){
  total = 0;
  count.textContent = `TOTAL = ${total}`;
  inputArea.value = 0;
  }
});

clear.addEventListener("click", function () {
    inputArea.value = 0;
  });

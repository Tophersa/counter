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

// Add event
increase.addEventListener("click", function () {
  total = total + Number(inputArea.value);
  count.textContent = `TOTAL = ${total}`;
});

// Subtract event
decrease.addEventListener("click", function () {

  total = total - Number(inputArea.value);
  count.textContent = `TOTAL = ${total}`;
});

// Rest event
rest.addEventListener("click", function () {

  const confrimation = confirm("Your saved total will be lost. Are you sure you want to continue?");

  if(confrimation){
  total = 0;
  count.textContent = `TOTAL = ${total}`;
  inputArea.value = 0;
  }
});

// Clear input Area event
clear.addEventListener("click", function () {
    inputArea.value = 0;
  });

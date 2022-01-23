let overlay = document.getElementById("overlay");
let submitBtn = document.getElementById("submit-btn");
let customTip = document.getElementById("custom-tip");
let myBill = document.getElementById("bill");
let numOfPeople = document.getElementById("num-ppl");
let five = document.getElementById("five");
let ten = document.getElementById("ten");
let fifteen = document.getElementById("fifteen");
let twentyFive = document.getElementById("twenty-five");
let fifty = document.getElementById("fifty");
let custom = document.getElementById("custom");
let tipPer = document.getElementById("tip-amount");
let totalPlusTip = document.getElementById("total-plus-tip");
let resetBtn = document.getElementById("reset-btn");

let billTotal;
let totalPeople;
let customTipEntered;

function handleInput(event) {
  billTotal = event.target.value;
  console.log(`billTotal: ${billTotal}`);
}

function handlePeople(event) {
  totalPeople = event.target.value;
  console.log(`totalPpl: ${totalPeople}`);
}

myBill.addEventListener("input", handleInput);
numOfPeople.addEventListener("input", handlePeople);

function calculateTotals(tip) {
  tipPer.textContent = "$" + ((billTotal / totalPeople) * tip).toFixed(2);
  totalPlusTip.textContent =
    "$" +
    (billTotal / totalPeople + (billTotal / totalPeople) * tip).toFixed(2);
}

function handleCustomTip(event) {
  customTipEntered = event.target.value;
  console.log(`handleCustomTip: ${event.target.value}`);
}

customTip.addEventListener("input", handleCustomTip);

function handleTip() {
  calculateTotals(customTipEntered * 0.01);
  overlay.style.visibility = "hidden";
}

submitBtn.addEventListener("click", handleTip);

function resetFeilds() {
  tipPer.textContent = "$0.00";
  totalPlusTip.textContent = "$0.00";
  myBill.value = "";
  numOfPeople.value = "";
  billTotal = 0;
  totalPeople = 0;
  customTipEntered = 0;
}

function customModal() {
  overlay.style.visibility = "visible";
}

five.addEventListener("click", () => calculateTotals(0.05));
ten.addEventListener("click", () => calculateTotals(0.1));
fifteen.addEventListener("click", () => calculateTotals(0.15));
twentyFive.addEventListener("click", () => calculateTotals(0.25));
fifty.addEventListener("click", () => calculateTotals(0.5));
custom.addEventListener("click", customModal);

resetBtn.addEventListener("click", resetFeilds);

let myBill = document.getElementById("bill");
let numOfPeople = document.getElementById("num-ppl");
let five = document.getElementById("five");
let ten = document.getElementById("ten");
let fifteen = document.getElementById("fifteen");
let twentyFive = document.getElementById("twenty-five");
let fifty = document.getElementById("fifty");
let tipPer = document.getElementById("tip-amount");
let totalPlusTip = document.getElementById("total-plus-tip");
let resetBtn = document.getElementById("reset-btn");

let billTotal;
let totalPeople;

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
  console.log(`calc function: ${this}`);
  tipPer.textContent = "$" + ((billTotal / totalPeople) * tip).toFixed(2);
  totalPlusTip.textContent =
    "$" +
    (billTotal / totalPeople + (billTotal / totalPeople) * tip).toFixed(2);
}

function resetFeilds() {
  tipPer.textContent = "$0.00";
  totalPlusTip.textContent = "$0.00";
  myBill.value = "";
  numOfPeople.value = "";
}

five.addEventListener("click", () => calculateTotals(0.05));
ten.addEventListener("click", () => calculateTotals(0.1));
fifteen.addEventListener("click", () => calculateTotals(0.15));
twentyFive.addEventListener("click", () => calculateTotals(0.25));
fifty.addEventListener("click", () => calculateTotals(0.5));

resetBtn.addEventListener("click", resetFeilds);

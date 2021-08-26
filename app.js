const inputBuy = document.querySelector("#input-buy");
const inputQty = document.querySelector("#input-qty");
const inputSell = document.querySelector("#input-sell");
const btnCheck = document.querySelector("#btn-check");
const outputDiv = document.querySelector("#output");

function calculateAbsoluteGainOrLoss() {
  return inputSell.value * inputQty.value - inputBuy.value * inputQty.value;
}

function calculatePercentageGainOrLoss() {
  return ((inputSell.value - inputBuy.value) / inputBuy.value) * 100;
}

function displayOutput() {
  if (
    inputBuy.value === "" ||
    inputSell.value === "" ||
    inputQty.value === ""
  ) {
    outputDiv.innerText = "Please enter all the details about your purchase!";
  } else {
    if (calculateAbsoluteGainOrLoss() > 0) {
      outputDiv.innerText =
        "Yay! Your profit is ₹" +
        calculateAbsoluteGainOrLoss() +
        ", with a profit percentage of " +
        calculatePercentageGainOrLoss().toFixed(4) +
        "%.";

      outputDiv.style.backgroundColor = "green";
    } else if (calculateAbsoluteGainOrLoss() < 0) {
      outputDiv.innerText =
        "Oops! Your loss is ₹" +
        Math.abs(calculateAbsoluteGainOrLoss()) +
        ", with a loss percentage of " +
        Math.abs(calculatePercentageGainOrLoss()).toFixed(4) +
        "%.";

      outputDiv.style.backgroundColor = "red";
    } else {
      outputDiv.innerText = "No gain, no pain sir!";
    }
  }
}

btnCheck.addEventListener("click", displayOutput);


let count = 0;

let countElement = document.getElementById("count");

let increaseButton = document.getElementById("increase");
let decreaseButton = document.getElementById("decrease");
let resetButton = document.getElementById("reset");

function updateCount() {
  countElement.textContent = count;
}

function increaseCount() {
  count = count + 1;
  updateCount();
}

function decreaseCount() {
  count = count - 1;
  updateCount();
}

function resetCount() {
  count = 0;
  updateCount();
}

increaseButton.addEventListener("click", increaseCount);
decreaseButton.addEventListener("click", decreaseCount);
resetButton.addEventListener("click", resetCount);

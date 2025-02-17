const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? "bruh?" : a / b);
const modulo = (a, b) => a % b;

let num1 = null;
let num2 = null;
let operator = null;

const display = document.getElementById("display");

let shouldClearDisplay = false;

function populateDisplay(input) {
  if (shouldClearDisplay) {
    display.value = "";
    shouldClearDisplay = false;
  }
  display.value += input;
}

function clearDisplay() {
  display.value = "";
  num1 = null;
  num2 = null;
  operator = null;
}

function switchSign() {
  if (display.value !== "") {
    display.value = parseFloat(display.value) * -1;
  }
}

function operate(num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (isNaN(num1) || isNaN(num2)) return "Invalid";

  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    case "%":
      return modulo(num1, num2);
    default:
      return "Invalid";
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("operator")) {
      if (operator !== null && display.value !== "") {
        num2 = display.value;
        display.value = operate(num1, num2, operator);
        num1 = display.value;
      } else {
        num1 = display.value;
      }
      operator = button.textContent;
      shouldClearDisplay = true;
    }

    if (button.classList.contains("equal")) {
      if (num1 === null || display.value === "") return;
      num2 = display.value;
      display.value = operate(num1, num2, operator);
      num1 = display.value;
      num2 = null;
      operator = null;
      shouldClearDisplay = true;
    }
  });
});

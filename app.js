const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? "bruh?" : a / b);

let num1 = null;
let num2 = null;
let operator = null;

const display = document.getElementById("display");

function populateDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
  num1 = null;
  num2 = null;
  operator = null;
}

function operate(num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return "Invalid";
  }
}

function cackleLater() {
  document.addEventListener("click", (event) => {
    const button = event.target;
  });
}

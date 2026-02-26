const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const equalsBtn = document.getElementById("equals");
const clearBtn = document.getElementById("clear");

let firstNum = "";
let secondNum = "";
let operator = null;
let resultDisplayed = false;

function render() {
  if (!operator) {
    display.textContent = firstNum || "0";
  } else {
    display.textContent = secondNum || firstNum;
  }
}

function calculate() {
  const a = parseFloat(firstNum);
  const b = parseFloat(secondNum);

  if (operator === "+") return add(a, b);
  if (operator === "-") return subtract(a, b);
  if (operator === "*") return multiply(a, b);
  if (operator === "/") return b !== 0 ? divide(a, b) : "Error";
}

digits.forEach(btn => {
  btn.addEventListener("click", () => {
    if (resultDisplayed) {
      firstNum = "";
      secondNum = "";
      operator = null;
      resultDisplayed = false;
    }

    if (!operator) {
      firstNum += btn.textContent;
    } else {
      secondNum += btn.textContent;
    }

    render();
  });
});

operators.forEach(btn => {
  btn.addEventListener("click", () => {
    if (!firstNum) return;

    if (firstNum && secondNum) {
      const result = calculate();
      firstNum = result.toString();
      secondNum = "";
    }

    operator = btn.textContent;
    resultDisplayed = false;
    render();
  });
});

equalsBtn.addEventListener("click", () => {
  if (!firstNum || !operator || !secondNum) return;

  const result = calculate();
  display.textContent = result;

  firstNum = result.toString();
  secondNum = "";
  operator = null;
  resultDisplayed = true;
});

clearBtn.addEventListener("click", () => {
  firstNum = "";
  secondNum = "";
  operator = null;
  resultDisplayed = false;
  render();
});



// Util functions
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
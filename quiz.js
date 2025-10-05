// Functions for operations
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
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

// Get elements
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultSpan = document.getElementById("calculation-result");

// Helper function to update result
function updateResult(value) {
  resultSpan.textContent = value;
}

// Add event listeners
document.getElementById("add").addEventListener("click", () => {
  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);
  updateResult(add(a, b));
});

document.getElementById("subtract").addEventListener("click", () => {
  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);
  updateResult(subtract(a, b));
});

document.getElementById("multiply").addEventListener("click", () => {
  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);
  updateResult(multiply(a, b));
});

document.getElementById("divide").addEventListener("click", () => {
  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);
  updateResult(divide(a, b));
});

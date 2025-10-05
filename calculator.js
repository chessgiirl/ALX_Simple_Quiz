// Run JS after the DOM has loaded
document.addEventListener('DOMContentLoaded', function () {
  // Element references
  const number1Input = document.getElementById('number1');
  const number2Input = document.getElementById('number2');
  const resultSpan = document.getElementById('calculation-result');

  // Arithmetic functions
  function add(number1, number2) {
    return number1 + number2;
  }

  function subtract(number1, number2) {
    return number1 - number2;
  }

  function multiply(number1, number2) {
    return number1 * number2;
  }

  function divide(number1, number2) {
    return number1 / number2;
  }

  // Helper: read inputs and safely parse to numbers (default 0)
  function readInputs() {
    const raw1 = parseFloat(number1Input.value);
    const raw2 = parseFloat(number2Input.value);
    const number1 = Number.isNaN(raw1) ? 0 : raw1;
    const number2 = Number.isNaN(raw2) ? 0 : raw2;
    return { number1, number2 };
  }

  // Helper: display result (string or number)
  function displayResult(value) {
    resultSpan.textContent = value;
  }

  // Attach event listeners to buttons

  document.getElementById('add').addEventListener('click', function () {
    const { number1, number2 } = readInputs();
    const result = add(number1, number2);
    displayResult(result);
  });

  document.getElementById('subtract').addEventListener('click', function () {
    const { number1, number2 } = readInputs();
    const result = subtract(number1, number2);
    displayResult(result);
  });

  document.getElementById('multiply').addEventListener('click', function () {
    const { number1, number2 } = readInputs();
    const result = multiply(number1, number2);
    displayResult(result);
  });

  document.getElementById('divide').addEventListener('click', function () {
    const { number1, number2 } = readInputs();
    // handle division by zero explicitly
    if (number2 === 0) {
      displayResult('Cannot divide by zero');
    } else {
      const result = divide(number1, number2);
      displayResult(result);
    }
  });
});

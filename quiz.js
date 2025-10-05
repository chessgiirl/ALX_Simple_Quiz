// Define the checkAnswer function as required
function checkAnswer() {
  // Identify the correct answer
  const correctAnswer = "4";

  // Retrieve the user's selected radio input for name="quiz"
  const selected = document.querySelector('input[name="quiz"]:checked');

  // Get the user's answer value (if none selected, userAnswer will be null)
  const userAnswer = selected ? selected.value : null;

  // Get the feedback element
  const feedbackElem = document.getElementById('feedback');

  // Compare and display appropriate feedback
  if (userAnswer === correctAnswer) {
    feedbackElem.textContent = "Correct! Well done.";
  } else {
    feedbackElem.textContent = "That's incorrect. Try again!";
  }
}

// Add event listener to the Submit Answer button (pass the function reference)
document.getElementById('submit-answer').addEventListener('click', checkAnswer);

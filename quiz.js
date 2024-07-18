function checkAnswer() {
  const correctAnswer = "4";
  const userAnswerElement = document.querySelector('input[name="quiz"]:checked');
  
  if (!userAnswerElement) {
      document.getElementById("feedback").textContent = "Please select an answer.";
      return;
  }

  const userAnswer = userAnswerElement.value;

  if (userAnswer === correctAnswer) {
      document.getElementById("feedback").textContent = "Correct! Well done.";
  } else {
      document.getElementById("feedback").textContent = "That's incorrect. Try again!";
  }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);

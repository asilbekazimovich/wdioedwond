function checkAnswer(inputId, correctAnswer, resultId) {
    const userAnswer = document.getElementById(inputId).value.trim();
    const resultDiv = document.getElementById(resultId);

    if (userAnswer === correctAnswer) {
      resultDiv.textContent = "✅ To'g'ri javob!";
      resultDiv.className = "result correct";
    } else {
      resultDiv.textContent = "❌ Noto‘g‘ri. Yana urinib ko‘ring.";
      resultDiv.className = "result wrong";
    }
  }
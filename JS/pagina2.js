const questions = [
    {
      text: "¿Cómo se dice 'casa' en inglés?",
      options: ["House", "Car", "Tree", "Dog"],
      correct: 0
    },
    {
      text: "¿Cuál es la traducción de 'agua'?",
      options: ["Milk", "Juice", "Water", "Tea"],
      correct: 2
    },
    {
      text: "¿Qué significa 'sun'?",
      options: ["Sol", "Luna", "Estrella", "Cielo"],
      correct: 0
    },
    {
      text: "Traduce al inglés: 'amigo'",
      options: ["Friend", "Brother", "Teacher", "Girl"],
      correct: 0
    },
    {
      text: "¿Cómo se dice 'manzana'?",
      options: ["Banana", "Apple", "Orange", "Grapes"],
      correct: 1
    },
    {
      text: "¿Qué significa 'book'?",
      options: ["Libro", "Mesa", "Silla", "Cuaderno"],
      correct: 0
    }
  ];
  
  let currentQuestion = 0;
  let selectedAnswer = null;
  
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options");
  const feedback = document.getElementById("feedback");
  const continueBtn = document.getElementById("continue-btn");
  const progress = document.getElementById("progress");
  
  function loadQuestion() {
    const q = questions[currentQuestion];
    questionText.textContent = q.text;
    optionsContainer.innerHTML = "";
    feedback.textContent = "";
    continueBtn.disabled = true;
    continueBtn.classList.remove("enabled");
    selectedAnswer = null;
  
    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.classList.add("option-btn");
      btn.textContent = opt;
      btn.onclick = () => selectOption(i);
      optionsContainer.appendChild(btn);
    });
  
    progress.style.width = `${(currentQuestion / questions.length) * 100}%`;
  }
  
  function selectOption(i) {
    const q = questions[currentQuestion];
    selectedAnswer = i;
    const buttons = document.querySelectorAll(".option-btn");
  
    buttons.forEach((btn) => {
      btn.style.borderColor = "#ddd";
      btn.style.background = "#fff";
    });
  
    if (i === q.correct) {
      feedback.style.color = "#22c55e";
      feedback.textContent = "¡Correcto!";
      buttons[i].style.borderColor = "#22c55e";
      buttons[i].style.background = "#dcfce7";
      continueBtn.disabled = false;
      continueBtn.classList.add("enabled");
    } else {
      feedback.style.color = "#dc2626";
      feedback.textContent = `Incorrecto. La respuesta era: "${q.options[q.correct]}"`;
      buttons[i].style.borderColor = "#dc2626";
      buttons[i].style.background = "#fee2e2";
  
      setTimeout(() => {
        nextQuestion();
      }, 2000);
    }
  }
  
  continueBtn.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      nextQuestion();
    }
  });
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      questionText.textContent = "🎉 ¡Has terminado la lección de inglés nivel 2!";
      optionsContainer.innerHTML = "";
      feedback.textContent = "";
      continueBtn.style.display = "none";
      progress.style.width = "100%";
    }
  }
  
  loadQuestion();
  
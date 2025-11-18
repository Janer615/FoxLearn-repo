const questions1 = [
    { text: "¿Cuál de estas es una vocal?", options: ["B", "E", "D", "G"], correct: 1 },
    { text: "¿Cuál de estas letras es consonante?", options: ["A", "I", "O", "L"], correct: 3 },
    { text: "Selecciona la letra que suena como 'ce'", options: ["C", "Q", "K", "T"], correct: 0 },
    { text: "¿Qué letra empieza la palabra 'sol'?", options: ["S", "O", "L", "A"], correct: 0 }
  ];
  
  let currentQuestion = 0;
  let selectedAnswer = null;
  
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options");
  const feedback = document.getElementById("feedback");
  const continueBtn = document.getElementById("continue-btn");
  const progress = document.getElementById("progress");
  
  function loadQuestion1() {
    const q = questions1[currentQuestion];
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
      btn.onclick = () => selectOption1(i);
      optionsContainer.appendChild(btn);
    });
  
    progress.style.width = `${(currentQuestion / questions1.length) * 100}%`;
  }
  
  function selectOption1(i) {
    const q = questions1[currentQuestion];
    selectedAnswer = i;
    const buttons = document.querySelectorAll(".option-btn");
  
    buttons.forEach(btn => {
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
      feedback.textContent = `Incorrecto. La respuesta correcta era: "${q.options[q.correct]}"`;
      buttons[i].style.borderColor = "#dc2626";
      buttons[i].style.background = "#fee2e2";
      setTimeout(() => { nextQuestion1(); }, 2000);
    }
  }
  
  continueBtn.addEventListener("click", () => {
    if (selectedAnswer !== null) nextQuestion1();
  });
  
  function nextQuestion1() {
  currentQuestion++;
  if (currentQuestion < questions1.length) {
    loadQuestion1();
  } else {
    questionText.textContent = "🎉 ¡Has terminado la lección de Español nivel 1!";
    optionsContainer.innerHTML = "";
    feedback.textContent = "";
    continueBtn.style.display = "none";
    progress.style.width = "100%";

    //Guardar progreso en la BD
    fetch("../PHP/guardar_progreso_esp.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "nivel=espanol_nivel1"
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
  }
}

  
  loadQuestion1();
  
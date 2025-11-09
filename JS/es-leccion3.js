const questions3 = [
    {
      text: "Lee: 'El gato negro duerme en la silla.' ¿Dónde duerme el gato?",
      options: ["En la mesa", "En la silla", "En la cama", "En el suelo"],
      correct: 1
    },
    {
      text: "Lee: 'Luis juega con su pelota en el parque.' ¿Qué hace Luis?",
      options: ["Corre en la escuela", "Juega en casa", "Juega en el parque", "Duerme en la cama"],
      correct: 2
    },
    {
      text: "Lee: 'María come manzanas y naranjas.' ¿Qué come María?",
      options: ["Solo manzanas", "Solo naranjas", "Manzanas y naranjas", "Plátanos"],
      correct: 2
    },
    {
      text: "Lee: 'El perro ladra fuerte por la noche.' ¿Cuándo ladra el perro?",
      options: ["Por la mañana", "Por la tarde", "Por la noche", "Todo el día"],
      correct: 2
    },
    {
      text: "Lee: 'El sol brilla en el cielo azul.' ¿De qué color es el cielo?",
      options: ["Rojo", "Amarillo", "Azul", "Verde"],
      correct: 2
    },
    {
      text: "Lee: 'Ana y Pedro van a la escuela juntos.' ¿Quiénes van a la escuela?",
      options: ["Ana y Pedro", "Ana y María", "Pedro y Luis", "Luis y Ana"],
      correct: 0
    }
  ];
  
  let currentQuestion3 = 0;
  let selectedAnswer3 = null;
  
  const questionText3 = document.getElementById("question-text");
  const optionsContainer3 = document.getElementById("options");
  const feedback3 = document.getElementById("feedback");
  const continueBtn3 = document.getElementById("continue-btn");
  const progress3 = document.getElementById("progress");
  
  function loadQuestion3() {
    const q = questions3[currentQuestion3];
    questionText3.textContent = q.text;
    optionsContainer3.innerHTML = "";
    feedback3.textContent = "";
    continueBtn3.disabled = true;
    continueBtn3.classList.remove("enabled");
    selectedAnswer3 = null;
  
    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.classList.add("option-btn");
      btn.textContent = opt;
      btn.onclick = () => selectOption3(i);
      optionsContainer3.appendChild(btn);
    });
  
    progress3.style.width = `${(currentQuestion3 / questions3.length) * 100}%`;
  }
  
  function selectOption3(i) {
    const q = questions3[currentQuestion3];
    selectedAnswer3 = i;
    const buttons = document.querySelectorAll(".option-btn");
  
    buttons.forEach(btn => {
      btn.style.borderColor = "#ddd";
      btn.style.background = "#fff";
    });
  
    if (i === q.correct) {
      feedback3.style.color = "#22c55e";
      feedback3.textContent = "¡Correcto!";
      buttons[i].style.borderColor = "#22c55e";
      buttons[i].style.background = "#dcfce7";
      continueBtn3.disabled = false;
      continueBtn3.classList.add("enabled");
    } else {
      feedback3.style.color = "#dc2626";
      feedback3.textContent = `Incorrecto. La respuesta correcta era: "${q.options[q.correct]}"`;
      buttons[i].style.borderColor = "#dc2626";
      buttons[i].style.background = "#fee2e2";
      setTimeout(() => { nextQuestion3(); }, 2000);
    }
  }
  
  continueBtn3.addEventListener("click", () => {
    if (selectedAnswer3 !== null) nextQuestion3();
  });
  
  function nextQuestion3() {
    currentQuestion3++;
    if (currentQuestion3 < questions3.length) {
      loadQuestion3();
    } else {
      questionText3.textContent = "🎉 ¡Has terminado la lección de Español nivel 3!";
      optionsContainer3.innerHTML = "";
      feedback3.textContent = "";
      continueBtn3.style.display = "none";
      progress3.style.width = "100%";
    }
  }
  
  loadQuestion3();
  
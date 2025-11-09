const questions4 = [
    {
      text: "El __ corre rápido por el jardín porque quiere jugar.",
      options: ["gato", "perro", "sol", "árbol"],
      correct: 1
    },
    {
      text: "El cielo está muy __ hoy.",
      options: ["azul", "rojo", "frío", "alto"],
      correct: 0
    },
    {
      text: "Selecciona el sinónimo de 'feliz' que completa la frase: Lucas está muy __ porque recibió un regalo.",
      options: ["triste", "contento", "cansado", "aburrido"],
      correct: 1
    },
    {
      text: "El conejo __ rápidamente hacia su madriguera.",
      options: ["salta", "duerme", "llora", "canta"],
      correct: 0
    },
    {
      text: "Selecciona el antónimo de 'pequeño' para completar: El elefante es muy __.",
      options: ["grande", "chiquito", "diminuto", "bajo"],
      correct: 0
    },
    {
      text: "María y Juan van a la biblioteca a __ libros interesantes.",
      options: ["leer", "dormir", "saltar", "cantar"],
      correct: 0
    },
    {
      text: "Completa la historia: El sol se __ detrás de las montañas y la luna empieza a brillar.",
      options: ["esconde", "canta", "corre", "llora"],
      correct: 0
    },
    {
      text: "El pastel está muy __ y todos quieren probarlo.",
      options: ["dulce", "amargo", "frío", "rápido"],
      correct: 0
    }
  ];
  
  let currentQuestion4 = 0;
  let selectedAnswer4 = null;
  
  const questionText4 = document.getElementById("question-text");
  const optionsContainer4 = document.getElementById("options");
  const feedback4 = document.getElementById("feedback");
  const continueBtn4 = document.getElementById("continue-btn");
  const progress4 = document.getElementById("progress");
  
  function loadQuestion4() {
    const q = questions4[currentQuestion4];
    questionText4.textContent = q.text;
    optionsContainer4.innerHTML = "";
    feedback4.textContent = "";
    continueBtn4.disabled = true;
    continueBtn4.classList.remove("enabled");
    selectedAnswer4 = null;
  
    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.classList.add("option-btn");
      btn.textContent = opt;
      btn.onclick = () => selectOption4(i);
      optionsContainer4.appendChild(btn);
    });
  
    progress4.style.width = `${(currentQuestion4 / questions4.length) * 100}%`;
  }
  
  function selectOption4(i) {
    const q = questions4[currentQuestion4];
    selectedAnswer4 = i;
    const buttons = document.querySelectorAll(".option-btn");
  
    buttons.forEach(btn => {
      btn.style.borderColor = "#ddd";
      btn.style.background = "#fff";
    });
  
    if (i === q.correct) {
      feedback4.style.color = "#22c55e";
      feedback4.textContent = "¡Correcto!";
      buttons[i].style.borderColor = "#22c55e";
      buttons[i].style.background = "#dcfce7";
      continueBtn4.disabled = false;
      continueBtn4.classList.add("enabled");
    } else {
      feedback4.style.color = "#dc2626";
      feedback4.textContent = `Incorrecto. la respuesta correcta era: "${q.options[q.correct]}"`;
      buttons[i].style.borderColor = "#dc2626";
      buttons[i].style.background = "#fee2e2";
      setTimeout(() => { nextQuestion4(); }, 2500);
    }
  }
  
  continueBtn4.addEventListener("click", () => {
    if (selectedAnswer4 !== null) nextQuestion4();
  });
  
  function nextQuestion4() {
    currentQuestion4++;
    if (currentQuestion4 < questions4.length) {
      loadQuestion4();
    } else {
      questionText4.textContent = "🎉 ¡Felicidades has completado la última lección de español!";
      optionsContainer4.innerHTML = "";
      feedback4.textContent = "";
      continueBtn4.style.display = "none";
      progress4.style.width = "100%";
    }
  }
  
  loadQuestion4();
  
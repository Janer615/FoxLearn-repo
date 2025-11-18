const questions = [
  { text: "¿Cómo se dice 'gato' en inglés?", options: ["Dog", "Cat", "Bird", "Fish"], correct: 1 },
  { text: "¿Cuál es la forma correcta de saludar?", options: ["Bye", "Thanks", "Hello", "Please"], correct: 2 },
  { text: "Traduce: 'Rojo'", options: ["Blue", "Red", "Green", "Yellow"], correct: 1 },
  { text: "¿Qué significa 'Apple'?", options: ["Manzana", "Naranja", "Pera", "Plátano"], correct: 0 }
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
    btn.onclick = () => selectOption(i, opt); // pasamos también el texto
    optionsContainer.appendChild(btn);
  });

  progress.style.width = `${(currentQuestion / questions.length) * 100}%`;
}

function selectOption(i, word) {
  selectedAnswer = i;

  // 🔊 Pronunciar la palabra seleccionada
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US"; // idioma inglés
  speechSynthesis.speak(utterance);

  // Marcar visualmente la opción seleccionada
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(btn => { btn.style.borderColor = "#ddd"; btn.style.background = "#fff"; });
  buttons[i].style.borderColor = "#F97316";
  buttons[i].style.background = "#ffffff";

  // Habilitar botón continuar
  continueBtn.disabled = false;
  continueBtn.classList.add("enabled");
}

continueBtn.addEventListener("click", () => {
  if (selectedAnswer !== null) {
    checkAnswer();
  }
});

function checkAnswer() {
  const q = questions[currentQuestion];
  const buttons = document.querySelectorAll(".option-btn");

  if (selectedAnswer === q.correct) {
    feedback.style.color = "#22c55e";
    feedback.textContent = "¡Correcto!";
    buttons[selectedAnswer].style.borderColor = "#22c55e";
    buttons[selectedAnswer].style.background = "#dcfce7";
  } else {
    feedback.style.color = "#dc2626";
    feedback.textContent = `Incorrecto. La respuesta era: "${q.options[q.correct]}"`;
    buttons[selectedAnswer].style.borderColor = "#dc2626";
    buttons[selectedAnswer].style.background = "#fee2e2";
  }

  // Pasar a la siguiente pregunta después de 2 seg
  setTimeout(() => {
    nextQuestion();
  }, 2000);
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    questionText.textContent = "🎉 ¡Has terminado el cuestionario!";
    optionsContainer.innerHTML = "";
    feedback.textContent = "";
    continueBtn.style.display = "none";
    progress.style.width = "100%";

    // 🔥 Guardar progreso en la BD
    fetch("../PHP/guardar_progreso_eng.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "nivel=ingles_nivel1"
    })
    .then(res => res.json())
    .then(data => {
      console.log(data); // aquí puedes mostrar un mensaje o hacer algo con la respuesta
    });
  }
}

loadQuestion();

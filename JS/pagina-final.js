const questions = [
  {
    text: "Selecciona la oración correcta en inglés: 'El gato está en la mesa.'",
    options: [
      "The cat is on the table",
      "The dog is on the chair",
      "The sun is on the window",
      "The apple is on the floor"
    ],
    correct: 0
  },
  {
    text: "Elige la oración correcta: 'Yo tengo un libro y una lámpara.'",
    options: [
      "I have a book and a lamp",
      "I have a chair and a table",
      "I has a book and a lamp",
      "I have a dog and a cat"
    ],
    correct: 0
  },
  {
    text: "Selecciona la oración correcta: 'La manzana está sobre la silla.'",
    options: [
      "The apple is on the chair",
      "The apple is in the table",
      "The apple is under the floor",
      "The apple is on the lamp"
    ],
    correct: 0
  },
  {
    text: "Elige la oración correcta: 'El perro está al lado de la ventana.'",
    options: [
      "The dog is next to the window",
      "The dog is under the window",
      "The dog is on the floor",
      "The dog is on the chair"
    ],
    correct: 0
  },
  {
    text: "Selecciona la oración correcta: 'El sol está en el cielo.'",
    options: [
      "The sun is in the sky",
      "The sun is on the floor",
      "The sun is in the table",
      "The sun is under the chair"
    ],
    correct: 0
  },
  {
    text: "Elige la oración correcta: 'Yo bebo agua todos los días.'",
    options: [
      "I drink water every day",
      "I drink milk every day",
      "I eat water every day",
      "I drink juice every day"
    ],
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
    btn.onclick = () => selectOption(i, opt); // pasamos también el texto
    optionsContainer.appendChild(btn);
  });

  progress.style.width = `${(currentQuestion / questions.length) * 100}%`;
}

function selectOption(i, word) {
  selectedAnswer = i;

  // 🔊 Pronunciar la opción seleccionada
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US"; 
  speechSynthesis.speak(utterance);

  // Marcar visualmente la opción seleccionada con naranja
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(btn => { btn.style.borderColor = "#ddd"; btn.style.background = "#fff"; });
  buttons[i].style.borderColor = "#F97316";   // naranja bonito
  buttons[i].style.background = "#ffffff";    // fondo blanco/naranja suave

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
    questionText.textContent = "🎉 ¡Has terminado la última lección de inglés!";
    optionsContainer.innerHTML = "";
    feedback.textContent = "";
    continueBtn.style.display = "none";
    progress.style.width = "100%";

    // 🔥 Guardar progreso en la BD
    fetch("../PHP/guardar_progreso_eng.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "nivel=ingles_final"
    })
    .then(res => res.json())
    .then(data => {
      console.log(data); // aquí puedes mostrar un mensaje o hacer algo con la respuesta
    });
  }
}

loadQuestion();

const questions2 = [
  { text: "Selecciona el sinónimo de 'feliz':", options: ["Contento", "Triste", "Enojado", "Aburrido"], correct: 0 },
  { text: "Selecciona el antónimo de 'grande':", options: ["Pequeño", "Enorme", "Alto", "Ancho"], correct: 0 },
  { text: "Selecciona el sinónimo de 'rápido':", options: ["Veloz", "Lento", "Pesado", "Tranquilo"], correct: 0 },
  { text: "Selecciona el antónimo de 'caliente':", options: ["Frío", "Tibio", "Húmedo", "Seco"], correct: 0 },
  { text: "Selecciona el sinónimo de 'bonito':", options: ["Hermoso", "Feo", "Sucio", "Grande"], correct: 0 },
  { text: "Selecciona el antónimo de 'alto':", options: ["Bajo", "Gigante", "Mediano", "Largo"], correct: 0 }
];

let currentQuestion2 = 0;
let selectedAnswer2 = null;

const questionText2 = document.getElementById("question-text");
const optionsContainer2 = document.getElementById("options");
const feedback2 = document.getElementById("feedback");
const continueBtn2 = document.getElementById("continue-btn");
const progress2 = document.getElementById("progress");

function loadQuestion2() {
  const q = questions2[currentQuestion2];
  questionText2.textContent = q.text;
  optionsContainer2.innerHTML = "";
  feedback2.textContent = "";
  continueBtn2.disabled = true;
  continueBtn2.classList.remove("enabled");
  selectedAnswer2 = null;

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = opt;
    btn.onclick = () => selectOption2(i);
    optionsContainer2.appendChild(btn);
  });

  progress2.style.width = `${(currentQuestion2 / questions2.length) * 100}%`;
}

function selectOption2(i) {
  const q = questions2[currentQuestion2];
  selectedAnswer2 = i;
  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach(btn => { btn.style.borderColor = "#ddd"; btn.style.background = "#fff"; });

  if (i === q.correct) {
    feedback2.style.color = "#22c55e";
    feedback2.textContent = "¡Correcto!";
    buttons[i].style.borderColor = "#22c55e";
    buttons[i].style.background = "#dcfce7";
    continueBtn2.disabled = false;
    continueBtn2.classList.add("enabled");
  } else {
    feedback2.style.color = "#dc2626";
    feedback2.textContent = `Incorrecto. La respuesta correcta era: "${q.options[q.correct]}"`;
    buttons[i].style.borderColor = "#dc2626";
    buttons[i].style.background = "#fee2e2";
    setTimeout(() => { nextQuestion2(); }, 2000);
  }
}

continueBtn2.addEventListener("click", () => {
  if (selectedAnswer2 !== null) nextQuestion2();
});

function nextQuestion2() {
  currentQuestion2++;
  if (currentQuestion2 < questions2.length) {
    loadQuestion2();
  } else {
    questionText2.textContent = "🎉 ¡Has terminado la lección de Español nivel 2!";
    optionsContainer2.innerHTML = "";
    feedback2.textContent = "";
    continueBtn2.style.display = "none";
    progress2.style.width = "100%";

    // Guardar progreso en la BD
    fetch("../PHP/guardar_progreso_esp.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "nivel=espanol_nivel2"
    })
    .then(res => res.json())
    .then(data => {
      console.log(data); 
    });
  }
}

loadQuestion2();

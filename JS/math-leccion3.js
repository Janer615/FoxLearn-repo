const questions = [
  { text: "¿Cuánto es 2 x 3?", options: ["5", "6", "4", "8"], correct: 1 },
  { text: "¿Cuánto es 3 x 2?", options: ["5", "6", "4", "7"], correct: 1 },
  { text: "¿Cuánto es 4 x 1?", options: ["4", "3", "5", "1"], correct: 0 },
  { text: "¿Cuánto es 5 x 2?", options: ["10", "12", "7", "8"], correct: 0 }
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
  selectedAnswer = i;
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(btn => { btn.style.borderColor="#ddd"; btn.style.background="#fff"; });
  if(i === questions[currentQuestion].correct){
    feedback.style.color="#22c55e";
    feedback.textContent="¡Correcto!";
    buttons[i].style.borderColor="#22c55e";
    buttons[i].style.background="#dcfce7";
    continueBtn.disabled=false;
    continueBtn.classList.add("enabled");
  } else {
    feedback.style.color="#dc2626";
    feedback.textContent=`Incorrecto. La respuesta era: "${questions[currentQuestion].options[questions[currentQuestion].correct]}"`;
    buttons[i].style.borderColor="#dc2626";
    buttons[i].style.background="#fee2e2";
    setTimeout(nextQuestion,2000);
  }
}

continueBtn.addEventListener("click", ()=>{if(selectedAnswer!==null){nextQuestion();}});

function nextQuestion(){
  currentQuestion++;
  if(currentQuestion<questions.length){
    loadQuestion();
  } else {
    questionText.textContent="🎉 ¡Has terminado la lección 3 de Matemáticas!";
    optionsContainer.innerHTML="";
    feedback.textContent="";
    continueBtn.style.display="none";
    progress.style.width="100%";

    // 🔥 Guardar progreso en la BD
    fetch("../PHP/guardar_progreso_math.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "nivel=matematicas_nivel3"
    })
    .then(res => res.json())
    .then(data => {
      console.log(data); // aquí puedes mostrar un mensaje o hacer algo con la respuesta
    });
  }
}

loadQuestion();

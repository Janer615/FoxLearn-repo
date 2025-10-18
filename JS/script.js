// Diccionario con todos los textos
const traducciones = {
  es: {
    heroTitle: "¡Aprender nunca fue tan divertido como lo es con FoxLearn!",
    registroBtn: "Empieza ahora",
    inicioBtn: "Ya tengo una cuenta",
    feature1Title: "¡aprende mientras te diviertes!",
    feature1Text: `Aprender con FoxLearn es divertido ya que utlizamos la 
      <a href="https://www.educativa.com/blog-articulos/gamificacion-el-aprendizaje-divertido/">
      gamificación</a> para fortalecer y crear nuevos aprendizajes en ti. 
      ¡Ven a aprender y divertirte con Foxy y sus amigos!`,
    feature2Title: "aprendizaje acompañado",
    feature2Text: `En Foxlearn, nunca te sentirás regañado ni desmotivado 
      ya que si te equivocas, no serás regañado, sino aconsejado 
      y acompañado por Foxy, ¡Tu gran amigo y acompañante!`,
    feature3Title: "¡mantente motivado!",
    feature3Text: `Con nuestro sistema de rachas, aprender nunca será aburrido. 
      Cada día que avances sumarás puntos, desbloquearás logros y 
      verás cómo tu progreso crece paso a paso, manteniéndote motivado 
      a seguir aprendiendo sin perder el ritmo.`,
    finalTitle: "con foxlearn aprender es mucho más fácil",
    finalBtn: "Empieza ahora",
    footer: "© 2025 Foxlearn",
  },

  en: {
    heroTitle: "Learning has never been as fun as it is with FoxLearn!",
    registroBtn: "Start now",
    inicioBtn: "I already have an account",
    feature1Title: "Learn while having fun!",
    feature1Text: `Learning with FoxLearn is fun because we use 
      <a href="https://www.educativa.com/blog-articulos/gamificacion-el-aprendizaje-divertido/">
      gamification</a> to strengthen and create new knowledge in you. 
      Come learn and have fun with Foxy and friends!`,
    feature2Title: "Learning with support",
    feature2Text: `In Foxlearn, you will never feel scolded or unmotivated, 
      because if you make mistakes, you won’t be punished but rather guided 
      and supported by Foxy, your great friend and companion!`,
    feature3Title: "Stay motivated!",
    feature3Text: `With our streak system, learning will never be boring. 
      Each day you advance, you’ll earn points, unlock achievements, 
      and watch your progress grow step by step, keeping you motivated 
      to keep learning without losing momentum.`,
    finalTitle: "With FoxLearn, learning is much easier",
    finalBtn: "Start now",
    footer: "© 2025 Foxlearn",
  }
};

// Función para cambiar idioma
function cambiarIdioma(idioma) {
  document.getElementById("heroTitle").innerHTML = traducciones[idioma].heroTitle;
  document.getElementById("registroBtn").textContent = traducciones[idioma].registroBtn;
  document.getElementById("inicioBtn").textContent = traducciones[idioma].inicioBtn;

  document.getElementById("feature1Title").textContent = traducciones[idioma].feature1Title;
  document.getElementById("feature1Text").innerHTML = traducciones[idioma].feature1Text;

  document.getElementById("feature2Title").textContent = traducciones[idioma].feature2Title;
  document.getElementById("feature2Text").textContent = traducciones[idioma].feature2Text;

  document.getElementById("feature3Title").textContent = traducciones[idioma].feature3Title;
  document.getElementById("feature3Text").textContent = traducciones[idioma].feature3Text;

  document.getElementById("finalTitle").textContent = traducciones[idioma].finalTitle;
  document.getElementById("finalBtn").textContent = traducciones[idioma].finalBtn;

  document.getElementById("footer").textContent = traducciones[idioma].footer;
}

// Escuchar el cambio en el select
document.getElementById("Lenguaje").addEventListener("change", function () {
  cambiarIdioma(this.value);
});

// Iniciar en español
cambiarIdioma("es");

// Header con efecto scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

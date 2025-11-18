document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("Lenguaje");

  // Diccionario de traducciones
  const traducciones = {
    es: {
      feature1Title: "¡Tu primera lección de Matemáticas!",
      feature1Text: "Empieza tu camino en la materia de Matemáticas con divertidas lecciones junto a tu amigo Foxy :D. Aprende paso a paso, de manera fácil y entretenida, mientras mejoras tu cálculo, lógica y resolución de problemas. Con cada reto superado ganarás confianza y descubrirás que aprender Matemáticas puede ser tan divertido como jugar.",
      
      feature2Title: "Segunda Lección",
      feature2Text: "¡Wow! Estás en tu segunda lección de Matemáticas. Eso significa que vas avanzando firme y cada vez entiendes más conceptos. No te detengas ahora, que lo mejor está por venir. Cada paso que das te acerca a dominar sumas, restas y multiplicaciones, y Foxy está orgulloso de ti. Vamos por más retos y diversión. ¡Tú puedes!",
      
      feature3Title: "¡Casi al final!",
      feature3Text: "¡Ya llegaste a tu tercera lección de Matemáticas! Eso quiere decir que estás cada vez más cerca de la meta. Has demostrado disciplina y ganas de aprender, y Foxy está re contento contigo. Mantén ese ritmo porque lo mejor está por venir: cada respuesta correcta te acerca a dominar operaciones, problemas y lógica matemática. Estás a un pasito del final de este nivel, ¡no aflojes ahora!",
      
      finalTitle: "Última lección",
      footer: "© 2025 FoxLearn",
      idiomaLabel: "Idioma de la página:"
    },
    en: {
      feature1Title: "Your first Math lesson!",
      feature1Text: "Start your journey in Mathematics with fun lessons alongside your friend Foxy :D. Learn step by step, in an easy and entertaining way, while improving your calculation, logic, and problem-solving skills. With each challenge you overcome, you’ll gain confidence and discover that learning Math can be as fun as playing.",
      
      feature2Title: "Second Lesson",
      feature2Text: "Wow! You’re already in your second Math lesson. That means you’re moving forward steadily and understanding more concepts. Don’t stop now, the best is yet to come. Every step brings you closer to mastering addition, subtraction, and multiplication, and Foxy is proud of you. Let’s go for more challenges and fun. You can do it!",
      
      feature3Title: "Almost there!",
      feature3Text: "You’ve reached your third Math lesson! That means you’re getting closer to the goal. You’ve shown discipline and eagerness to learn, and Foxy is really happy with you. Keep up the pace because the best is yet to come: every correct answer takes you one step closer to mastering operations, problems, and mathematical logic. You’re just one step away from finishing this level, don’t give up now!",
      
      finalTitle: "Final lesson",
      footer: "© 2025 FoxLearn",
      idiomaLabel: "Page language:"
    }
  };

  // Función para aplicar traducciones
  function aplicarTraduccion(lang) {
    const t = traducciones[lang];
    document.getElementById("feature1Title").textContent = t.feature1Title;
    document.getElementById("feature1Text").textContent = t.feature1Text;
    document.getElementById("feature2Title").textContent = t.feature2Title;
    document.getElementById("feature2Text").textContent = t.feature2Text;
    document.getElementById("feature3Title").textContent = t.feature3Title;
    document.getElementById("feature3Text").textContent = t.feature3Text;
    document.getElementById("finalTitle").textContent = t.finalTitle;
    document.getElementById("footer").textContent = t.footer;
    document.querySelector(".seleccionar-idioma label").textContent = t.idiomaLabel;
  }

  // Detectar cambio de idioma
  selector.addEventListener("change", (e) => {
    aplicarTraduccion(e.target.value);
    localStorage.setItem("idioma", e.target.value); // guardar preferencia
  });

  // Aplicar traducción inicial según valor guardado o select
  const idiomaGuardado = localStorage.getItem("idioma") || selector.value;
  selector.value = idiomaGuardado;
  aplicarTraduccion(idiomaGuardado);
});

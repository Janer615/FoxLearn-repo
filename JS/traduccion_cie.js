document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("Lenguaje");

  // Diccionario de traducciones
  const traducciones = {
    es: {
      feature1Title: "¡Tu primera lección de Ciencias Naturales!",
      feature1Text: "Empieza tu camino en la materia de Ciencias Naturales con divertidas lecciones junto a tu amigo Foxy :D. Aprende paso a paso, de manera fácil y entretenida, mientras conoces el mundo de los animales, plantas, el cuerpo humano y el medio ambiente. ¡Con cada reto tu conocimiento crecerá y aprender será divertido!",
      
      feature2Title: "Segunda Lección",
      feature2Text: "¡Wow! Estás en tu segunda lección de Ciencias Naturales. Eso significa que vas aprendiendo más sobre la naturaleza, los animales y el medio que te rodea. Foxy está orgulloso de tu esfuerzo. ¡Sigue explorando y aprendiendo con curiosidad!",
      
      feature3Title: "¡Casi al final!",
      feature3Text: "¡Ya llegaste a tu tercera lección de Ciencias Naturales! Has aprendido sobre animales, plantas, cuerpo humano y ecosistemas. Cada respuesta correcta te acerca a dominar conocimientos importantes sobre el mundo natural. ¡No aflojes ahora, estás muy cerca!",
      
      finalTitle: "Última lección",
      footer: "© 2025 FoxLearn",
      idiomaLabel: "Idioma de la página:"
    },
    en: {
      feature1Title: "Your first Natural Sciences lesson!",
      feature1Text: "Start your journey in Natural Sciences with fun lessons alongside your friend Foxy :D. Learn step by step, in an easy and entertaining way, while discovering the world of animals, plants, the human body, and the environment. With each challenge, your knowledge will grow and learning will be fun!",
      
      feature2Title: "Second Lesson",
      feature2Text: "Wow! You’re already in your second Natural Sciences lesson. That means you’re learning more about nature, animals, and the environment around you. Foxy is proud of your effort. Keep exploring and learning with curiosity!",
      
      feature3Title: "Almost there!",
      feature3Text: "You’ve reached your third Natural Sciences lesson! You’ve learned about animals, plants, the human body, and ecosystems. Every correct answer brings you closer to mastering important knowledge about the natural world. Don’t give up now, you’re very close!",
      
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

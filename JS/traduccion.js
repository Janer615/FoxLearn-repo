document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("Lenguaje");

  // Diccionario de traducciones
  const traducciones = {
    es: {
      titulo: "FoxLearn - Aprende de forma divertida",
      quieroAprender: "Quiero aprender:",
      ingles: "Inglés",
      castellano: "Castellano",
      matematicas: "Matemáticas",
      ciencias: "Ciencias Naturales",
      idiomaLabel: "Idioma de la página:"
    },
    en: {
      titulo: "FoxLearn - Learn in a fun way",
      quieroAprender: "I want to learn:",
      ingles: "English",
      castellano: "Spanish",
      matematicas: "Math",
      ciencias: "Natural Sciences",
      idiomaLabel: "Page language:"
    }
  };

  // Función para aplicar traducciones
  function aplicarTraduccion(lang) {
    const t = traducciones[lang];

    document.title = t.titulo;
    document.querySelector("main h1").textContent = t.quieroAprender;
    document.querySelector(".card:nth-child(1) h2").textContent = t.ingles;
    document.querySelector(".card:nth-child(2) h2").textContent = t.castellano;
    document.querySelector(".card:nth-child(3) h2").textContent = t.matematicas;
    document.querySelector(".card:nth-child(4) h2").textContent = t.ciencias;
    document.querySelector(".seleccionar-idioma label").textContent = t.idiomaLabel;
  }

  // Detectar cambio de idioma
  selector.addEventListener("change", (e) => {
    aplicarTraduccion(e.target.value);
  });

  // Aplicar traducción inicial según valor del select
  aplicarTraduccion(selector.value);
});

<?php include("../PHP/auth.php"); ?>


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FoxLearn - Aprende de forma divertida</title>
    <link rel="stylesheet" href="../CSS/dashboard.css">
    <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;700&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <div class="logo">
            <img src="../IMG/logo.png" alt="FoxLearn Logo">
        </div>
        <div class="seleccionar-idioma">
            <label for="Lenguaje">Idioma de la página:</label>
            <select id="Lenguaje">
                <option value="es">Español</option>
                <option value="en">Inglés</option>
            </select>
        </div>
    </header>
     
    <section class="feature">
        <div class="feature-texto">
            <h2 id="feature1Title">¡Tu primera lección de Inglés!</h2>
            <p id="feature1Text">
                Empieza tu camino al
                <a href="https://es.wikipedia.org/wiki/Idioma_ingl%C3%A9s">Inglés</a>
                con divertidas lecciones junto a tu amigo Foxy :D. Aprende paso a paso, de manera 
                fácil y entretenida, mientras mejoras tu vocabulario, pronunciación y comprensión. 
                Con cada reto superado ganarás confianza y descubrirás que aprender un nuevo idioma 
                puede ser tan divertido como jugar.
            </p>
        </div>
        <div class="feature-img">
            <a href="quiz.php">
                <img src="../IMG/botón.png" alt="Foxy mostrando progreso">
            </a>
        </div>
    </section>

    <section class="feature invertida">
        <div class="feature-texto">
            <h2 id="feature2Title">Segunda Lección</h2>
            <p id="feature2Text">¡Wow! Estás en tu segunda lección ya :0 . Eso significa que 
              vas avanzando firme y cada vez entiendes más. No te detengas ahora, que lo mejor
               está por venir. Cada paso que das te acerca a dominar el inglés y 
               Foxy está orgulloso de ti. Vamos por más retos, más diversión 
               y más logros. ¡Tú puedes, sigue dándolo todo!
            </p>
        </div>
        <div class="feature-img">
            <a href="pagina2.php">
                <img src="../IMG/botón.png" alt="Ilustración 2">
            </a>
        </div>
    </section>

    <section class="feature">
        <div class="feature-texto">
            <h2 id="feature3Title">¡estás cerca!</h2>
            <p id="feature3Text">¡Wow, ya llegaste a tu tercera lección! Eso quiere decir que
               estás cada vez más cerca de la meta. Has demostrado disciplina y ganas de aprender,
                y Foxy está re contento contigo. Mantén ese ritmo porque lo mejor está por venir:
                 cada respuesta correcta te lleva un paso más cerca de dominar el inglés. Estás a un pasito
                  del final de este nivel, ¡no aflojes ahora!
            </p>
        </div>
        <div class="feature-img">
            <a href="pagina3.php">
                <img src="../IMG/botón.png" alt="Ilustración 3">
            </a>
        </div>
    </section>

    <section class="final">
        <div class="final-texto">
            <h1 id="finalTitle">última lección</h1>
        </div>
    </section>

    <section class="img-final">
        <a href="pagina-final.php">
            <img src="../IMG/botón.png" alt="FoxMan">
        </a>
    </section>

    <footer>
        <p id="footer">© 2025 Foxlearn</p>
    </footer>

    <!-- Enlazar el JS -->
    <script src="../JS/traduccion_en.js"></script>
</body>
</html>

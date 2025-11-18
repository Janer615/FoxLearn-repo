<?php include("../PHP/auth.php"); ?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FoxLearn - Aprende Español</title>
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
            <h2 id="feature1Title">¡Tu primera lección de Español!</h2>
            <p id="feature1Text">
                Empieza tu camino en la materia de
                <a href="https://es.wikipedia.org/wiki/Lengua_espa%C3%B1ola">Español</a>
                con divertidas lecciones junto a tu amigo Foxy :D. Aprende paso a paso, de manera 
                fácil y entretenida, mientras mejoras tu vocabulario, ortografía y comprensión lectora. 
                Con cada reto superado ganarás confianza y descubrirás que aprender Español puede ser 
                tan divertido como jugar.
            </p>
        </div>
        <div class="feature-img">
            <a href="es-leccion1.php">
                <img src="../IMG/botón.png" alt="Foxy mostrando progreso">
            </a>
        </div>
    </section>

    <section class="feature invertida">
        <div class="feature-texto">
            <h2 id="feature2Title">Segunda Lección</h2>
            <p id="feature2Text">¡Wow! Estás en tu segunda lección de Español. Eso significa que 
              vas avanzando firme y cada vez entiendes más. No te detengas ahora, que lo mejor
               está por venir. Cada paso que das te acerca a dominar la lectura y escritura, 
               y Foxy está orgulloso de ti. Vamos por más retos, más diversión 
               y más logros. ¡Tú puedes!
            </p>
        </div>
        <div class="feature-img">
            <a href="es-leccion2.php">
                <img src="../IMG/botón.png" alt="Ilustración 2">
            </a>
        </div>
    </section>

    <section class="feature">
        <div class="feature-texto">
            <h2 id="feature3Title">¡Casi al final!</h2>
            <p id="feature3Text">¡Ya llegaste a tu tercera lección de Español! Eso quiere decir que
               estás cada vez más cerca de la meta. Has demostrado disciplina y ganas de aprender,
                y Foxy está re contento contigo. Mantén ese ritmo porque lo mejor está por venir:
                 cada respuesta correcta te acerca a dominar la lectura, escritura y comprensión.
                 Estás a un pasito del final de este nivel, ¡no aflojes ahora!
            </p>
        </div>
        <div class="feature-img">
            <a href="es-leccion3.php">
                <img src="../IMG/botón.png" alt="Ilustración 3">
            </a>
        </div>
    </section>

    <section class="final">
        <div class="final-texto">
            <h1 id="finalTitle">Última lección</h1>
        </div>
    </section>

    <section class="img-final">
        <a href="es-leccion-final.php">
            <img src="../IMG/botón.png" alt="FoxMan">
        </a>
    </section>

    <footer>
        <p id="footer">© 2025 FoxLearn</p>
    </footer>

    <!-- Enlazar el JS -->
    <script src="../JS/traduccion_es.js"></script>
</body>
</html>

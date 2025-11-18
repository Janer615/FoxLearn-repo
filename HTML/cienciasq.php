<?php include("../PHP/auth.php"); ?>


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FoxLearn - Aprende Ciencias Naturales</title>
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
            <h2 id="feature1Title">¡Tu primera lección de Ciencias Naturales!</h2>
            <p id="feature1Text">
                Empieza tu camino en la materia de
                <a href="https://es.wikipedia.org/wiki/Ciencias_naturales">Ciencias Naturales</a>
                con divertidas lecciones junto a tu amigo Foxy :D. Aprende paso a paso, de manera 
                fácil y entretenida, mientras conoces el mundo de los animales, plantas, el cuerpo humano 
                y el medio ambiente. ¡Con cada reto tu conocimiento crecerá y aprender será divertido!
            </p>
        </div>
        <div class="feature-img">
            <a href="ciencias-leccion1.php">
                <img src="../IMG/botón.png" alt="Foxy mostrando progreso">
            </a>
        </div>
    </section>

    <section class="feature invertida">
        <div class="feature-texto">
            <h2 id="feature2Title">Segunda Lección</h2>
            <p id="feature2Text">¡Wow! Estás en tu segunda lección de Ciencias Naturales. Eso significa que 
              vas aprendiendo más sobre la naturaleza, los animales y el medio que te rodea. Foxy está orgulloso 
              de tu esfuerzo. ¡Sigue explorando y aprendiendo con curiosidad!
            </p>
        </div>
        <div class="feature-img">
            <a href="ciencias-leccion2.php">
                <img src="../IMG/botón.png" alt="Ilustración 2">
            </a>
        </div>
    </section>

    <section class="feature">
        <div class="feature-texto">
            <h2 id="feature3Title">¡Casi al final!</h2>
            <p id="feature3Text">¡Ya llegaste a tu tercera lección de Ciencias Naturales! Has aprendido sobre 
               animales, plantas, cuerpo humano y ecosistemas. Cada respuesta correcta te acerca a dominar 
               conocimientos importantes sobre el mundo natural. ¡No aflojes ahora, estás muy cerca!
            </p>
        </div>
        <div class="feature-img">
            <a href="ciencias-leccion3.php">
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
        <a href="ciencias-leccion-final.php">
            <img src="../IMG/botón.png" alt="FoxMan">
        </a>
    </section>

    <footer>
        <p id="footer">© 2025 FoxLearn</p>
    </footer>

    <!-- Enlazar el JS -->
    <script src="../JS/traduccion_cie.js"></script>
</body>
</html>

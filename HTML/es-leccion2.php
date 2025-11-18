<?php include("../PHP/auth.php"); ?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quiz</title>
  <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../CSS/quiz.css">
</head>
<body>
  <div class="quiz-container">
    <!-- Barra de progreso -->
    <div class="progress-bar">
      <div id="progress"></div>
    </div>

    <!-- Pregunta -->
    <div class="question-box">
      <img src="../IMG/mascota.png" alt="Mascota" class="mascota">
      <div class="speech-bubble">
        <p id="question-text">Pregunta aquí...</p>
      </div>
    </div>

    <!-- Opciones -->
    <div class="options" id="options"></div>

    <!-- Mensaje de feedback -->
    <p id="feedback" class="feedback"></p>

    <!-- Botón continuar -->
    <button id="continue-btn" disabled>CONTINUAR</button>
  </div>

  <script src="../JS/es-leccion2.js"></script>
</body>
</html>

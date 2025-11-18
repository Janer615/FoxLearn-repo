<?php
// Conexión a la base de datos
$servername = "localhost";
$username   = "root"; // tu usuario MySQL
$password   = "";     // tu contraseña MySQL
$dbname     = "db_foxi";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Error de conexión: " . $conn->connect_error);
}

// Recibir datos del formulario
$correo = $_POST['correo'];
$contrasena = $_POST['contrasena'];

// Encriptar contraseña
$hash = password_hash($contrasena, PASSWORD_BCRYPT);

// Insertar en la BD
$sql  = "INSERT INTO usuarios (correo, contrasena) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $correo, $hash);

if ($stmt->execute()) {
  // 🔥 Redirección después del registro
  header("Location: /FoxLearn-repo/HTML/login.html");
  exit();
} else {
  echo "Error: " . $conn->error;
}

$conn->close();
?>

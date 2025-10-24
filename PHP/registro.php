<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root"; // tu usuario MySQL
$password = "";     // tu contraseña MySQL
$dbname = "foxlearn_u";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Error de conexión: " . $conn->connect_error);
}

// Recibir datos del formulario
$usuario = $_POST['usuario'];
$contrasena = password_hash($_POST['contrasena'], PASSWORD_BCRYPT);

// Insertar en la BD
$sql = "INSERT INTO usuarios (usuario, contrasena) VALUES ('$usuario', '$contrasena')";

if ($conn->query($sql) === TRUE) {
  // 🔥 Redirección después del registro
  header("Location: /FoxLearn-repo/HTML/registro.html");
  exit();
} else {
  echo "Error: " . $conn->error;
}

$conn->close();
?>

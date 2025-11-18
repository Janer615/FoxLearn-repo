<?php
session_start();
$conexion = new mysqli("localhost", "root", "", "db_foxi");

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Verificamos que el usuario esté logueado
if (!isset($_SESSION['usuario_id'])) {
    echo json_encode(["status" => "error", "msg" => "No hay sesión activa"]);
    exit();
}

$usuario_id = $_SESSION['usuario_id'];
$nivel = $_POST['nivel'];

// Insertar progreso
$sql = "INSERT INTO matematicas (usuario_id, nivel, completado) VALUES (?, ?, 1)";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("is", $usuario_id, $nivel);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "msg" => "Progreso guardado"]);
} else {
    echo json_encode(["status" => "error", "msg" => $conexion->error]);
}

$conexion->close();
?>

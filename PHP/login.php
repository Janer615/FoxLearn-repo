<?php
session_start();
$conexion = new mysqli("localhost", "root", "", "db_foxi");

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

$correo = $_POST['correo'];
$contrasena = $_POST['contrasena'];

$sql = "SELECT id, contrasena FROM usuarios WHERE correo = ?";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("s", $correo);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $usuario = $result->fetch_assoc();
    if (password_verify($contrasena, $usuario['contrasena'])) {
        // Guardar sesión
        $_SESSION['usuario_id'] = $usuario['id'];
        $_SESSION['correo'] = $correo;

        echo json_encode([
            "status" => "success",
            "id" => $usuario['id'],
            "correo" => $correo
        ]);
    } else {
        echo json_encode(["status" => "error", "msg" => "Contraseña incorrecta"]);
    }
} else {
    echo json_encode(["status" => "error", "msg" => "Usuario no encontrado"]);
}
?>

<?php
header("Access-Control-Allow-Origin: *");


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "users";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Не удалось подключиться: " . $conn->connect_error);
}
  
$sql = "SELECT * FROM users";
$result = $conn->query($sql);
  
$users = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
}
  
header('Content-Type: application/json');
echo json_encode($users);
  
$conn->close();
?>

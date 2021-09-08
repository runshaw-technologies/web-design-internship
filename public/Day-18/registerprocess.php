<?php

include("config.php");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

$sql = "INSERT INTO register(name, email, password) VALUES('".$name."','".$email."','".$password."')";

if (mysqli_query($conn, $sql)) {
    echo ("<script LANGUAGE='JavaScript'>window.alert('Register successful!!!');</script>");
}

?>
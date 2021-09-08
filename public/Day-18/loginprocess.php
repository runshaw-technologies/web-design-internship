<?php

include("config.php");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'];
$password = $_POST['password'];

// $sql = "SELECT * FROM register WHERE email='".$email."'";
$sql = mysqli_query($conn, "SELECT * FROM register WHERE email='".$email."'");
$rows = mysqli_fetch_assoc($sql);
$num = mysqli_num_rows($sql);

if ($num == 1) {
    echo ("<script LANGUAGE='JavaScript'>window.alert('Login Successful!!!');window.location.href='dashboard.php'</script>");
} else {
    echo ("<script LANGUAGE='JavaScript'>window.alert('Error');window.location.href='index.php'</script>");
}

?>
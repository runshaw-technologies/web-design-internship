<?php

// $a = 10;
// $b = 30;
// echo ($a + $b);

// Data Types
// 1. String
// 2. Integer
// 3. Float
// 4. Boolean
// 5. Array
// 6. Object
// 7. NUll


// if (condition) {
//     // Statement
// } else {
//     // Code
// }

// Functions
// function functionName() {

// }

// SuperGlobals
// $GLOBALS
// $_SERVER
// $_REQUEST
// $_POST
// $_GET
// $_FILES
// $_ENV
// $_COOKIE
// $_SESSION

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
    <form action="registerprocess.php" method="POST">
        Name: <input type="text" name="name">
        Email: <input type="email" name="email">
        Password: <input type="password" name="password">
        <button type="submit">Register</button>
    </form>
    </div>
    <br>
    <br>
    <div>
    <form action="loginprocess.php" method="POST">
        Email: <input type="email" name="email">
        Password: <input type="password" name="password">
        <button type="submit">Login</button>
    </form>
    </div>
</body>
</html>

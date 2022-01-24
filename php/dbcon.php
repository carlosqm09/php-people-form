<?php

$servername = "localhost";
$username = "id18334628_user";
$password = "Cv5SB{)]Wc]p9YL_";
$dbname = "id18334628_people";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}

?>
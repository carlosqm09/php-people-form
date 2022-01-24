<?php
include 'dbcon.php';

$stmt = $conn->prepare("SELECT * FROM info");
$stmt->execute();

$people = json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
echo $people;

$conn = null;

?>
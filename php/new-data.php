<?php
include 'dbcon.php';

$req = json_decode(file_get_contents('php://input'));

$stmt = $conn->prepare("INSERT INTO info(person_name, last_name_1, last_name_2, adress, nbhd, post_code, cellphone, email) 
                        vALUES(:name, :pate, :mate, :direc, :nbhd, :post, :cel, :mail )");
var_dump($req);
$stmt -> bindValue(':name', $req->person_name);
$stmt -> bindValue(':pate', $req->last_name_1);
$stmt -> bindValue(':mate', $req->last_name_2);
$stmt -> bindValue(':direc', $req->adress);
$stmt -> bindValue(':nbhd', $req->nbhd);
$stmt -> bindValue(':post', $req->post_code);
$stmt -> bindValue(':cel', $req->cellphone);
$stmt -> bindValue(':mail', $req->email);

$stmt->execute();

echo $conn->lastInsertId();




$conn = null;

?>
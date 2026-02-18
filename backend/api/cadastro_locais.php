<?php
require_once "../config/db.php";
header("Content-Type: application/json");

if(!isset($_GET['user_id']) || !isset($_GET['local_nome'])){
    echo json_encode(["success" => false, "message" => "Parâmetros insuficientes."]);
    exit;
}

$sql = "INSERT INTO locais (user_id, local_nome) VALUES (?, ?)";
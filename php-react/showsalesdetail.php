<?php
// all-users.php is to fetch all users that exist in the database.
// Method: GET - http://localhost/php-react/all-users.php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// DB connection: $db_connection from db_connection.php
require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));
$theorderid = $data->theorderid;

$showsalesdetail = mysqli_query($db_connection, "SELECT seq as 流水號, OrderId as 訂單編號, ProdId as 產品代號, Qty as 數量, Discount as 折扣 FROM `orderdetail` WHERE `OrderId`='$theorderid'");
if (mysqli_num_rows($showsalesdetail) > 0) {
    $select_showsalesdetail = mysqli_fetch_all($showsalesdetail, MYSQLI_ASSOC);
    // json_encode([],JSON_UNESCAPED_UNICODE) 參數一定要加才會正確顯示中文
    echo json_encode(["success" => 1, "salesorders" => $select_showsalesdetail], JSON_UNESCAPED_UNICODE);
} else {
    echo json_encode(["success" => 0]);
}
?>
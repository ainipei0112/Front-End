<?php
// delete-user.php is for deleting an existing user.
// Method: POST - http://localhost/php-react/delete-user.php
// Required Fields: id --> EmpId

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// DB connection: $db_connection from db_connection.php
require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (isset($data->theseq) && is_numeric($data->theseq)) {
    $theseq = $data->theseq;
    $deletesalesorder = mysqli_query($db_connection, "DELETE FROM `salesorder` WHERE `OrderId`='$theseq'");
    $deletesalesdetail = mysqli_query($db_connection, "DELETE FROM `orderdetail` WHERE `OrderId`='$theseq'");
    if ($deletesalesorder && $deletesalesdetail) {
        echo json_encode(["success" => 1, "msg" => "User Deleted"]);
    } else {
        echo json_encode(["success" => 0, "msg" => "User Not Found!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "User Not Found!"]);
}
?>
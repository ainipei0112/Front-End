<?php
// update-user.php is for updating an existing user.
// Method: POST - http://localhost/php-react/update-user.php
// Required Fields: id --> EmpId, user_name --> EmpName, user_email --> JobTitle

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// DB connection: $db_connection from db_connection.php
require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if ( isset($data->salesorder_orderid)
    && isset($data->salesorder_empid)
    && isset($data->salesorder_custid)
    && isset($data->salesorder_orderdate)
    && isset($data->salesorder_descript)
    && !empty(trim($data->salesorder_orderid))
    && !empty(trim($data->salesorder_empid))
    && !empty(trim($data->salesorder_custid))
    && !empty(trim($data->salesorder_orderdate))
    && !empty(trim($data->salesorder_descript))
) {
    $salesorder_orderid = mysqli_real_escape_string($db_connection, trim($data->salesorder_orderid));
    $salesorder_empid = mysqli_real_escape_string($db_connection, trim($data->salesorder_empid));
    $salesorder_custid = mysqli_real_escape_string($db_connection, trim($data->salesorder_custid));
    $salesorder_orderdate = mysqli_real_escape_string($db_connection, trim($data->salesorder_orderdate));
    $salesorder_descript = mysqli_real_escape_string($db_connection, trim($data->salesorder_descript));
    $updateUser = mysqli_query($db_connection, "UPDATE `salesorder` SET `OrderId`='$salesorder_orderid', `EmpId`='$salesorder_empid', `CustId`='$salesorder_custid', `OrderDate`='$salesorder_orderdate', `Descript`='$salesorder_descript' WHERE `OrderId`='$data->orderid'");
    if ($updateUser) {
        echo json_encode(["success" => 1, "msg" => "User Updated."]);
    } else {
        echo json_encode(["success" => 0, "msg" => "User  not Updated."]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
?>
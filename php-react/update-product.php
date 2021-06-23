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

if (
    isset($data->productid)
    && isset($data->productname)
    && isset($data->productprice)
    && isset($data->productcost)
    && isset($data->productid2)
    && is_numeric($data->productprice)
    && is_numeric($data->productcost)
    && !empty(trim($data->productid))
    && !empty(trim($data->productname))
    && !empty(trim($data->productid2))
) {
    $productid = mysqli_real_escape_string($db_connection, trim($data->productid));
    $productname = mysqli_real_escape_string($db_connection, trim($data->productname));
    $productid2 = mysqli_real_escape_string($db_connection, trim($data->productid2));
    $productprice = (double)$data->productprice;
    $productcost = (double)$data->productcost;
    
    $updateProduct = mysqli_query($db_connection, "UPDATE `product` SET `ProdName`='$productname', `ProdID`='$productid2', `UnitPrice`='$productprice', `Cost`='$productcost' WHERE `ProdID`='$productid'");
    if ($updateProduct) {
        echo json_encode(["success" => 1, "msg" => "User Updated."]);
    } else {
        echo json_encode(["success" => 0, "msg" => $updateProduct]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required"]);
}
?>
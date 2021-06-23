<?php
// add-user.php is for inserting new users into the database.
// Method: POST - http://localhost/php-react/add-user.php
// Required Fields – user_name --> EmpName, user_email --> JobTitle

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// DB connection: $db_connection from db_connection.php
require 'db_connection.php';

// POST DATA
$data = json_decode(file_get_contents("php://input"));


if (
  isset($data->productid)
  && isset($data->productname)
  && isset($data->productprice)
  && isset($data->productcost)
  && is_numeric($data->productprice)
  && is_numeric($data->productcost)
  && !empty(trim($data->productid))
  && !empty(trim($data->productname))
) {
  $productid = mysqli_real_escape_string($db_connection, trim($data->productid));
  $productname = mysqli_real_escape_string($db_connection, trim($data->productname));
  $productprice = (double)$data->productprice;
  $productcost = (double)$data->productcost;
  $insertProduct = mysqli_query($db_connection, "INSERT INTO `product`(`ProdName`, `ProdID`, `UnitPrice`, `Cost`) VALUES ($productname,$productid,$productprice,$productcost)");
  if ($insertProduct) {
      echo json_encode(["success" => 1, "msg" => "Product Insert."]);
  } else {
      echo json_encode(["success" => 0, "msg" => $insertProduct]);
  }
} else {
  echo json_encode(["success" => 0, "msg" => "Please fill all the required"]);
}
?>
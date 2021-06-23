<?php
// all-users.php is to fetch all users that exist in the database.
// Method: GET - http://localhost/php-react/all-users.php

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
    && !empty(trim($data->productid))
) {
    $productId = mysqli_real_escape_string($db_connection, trim($data->productid));
    $productId = "'".$productId."'";

    $allproducts = mysqli_query($db_connection, "SELECT product.ProdID as productid,product.ProdName as productname,product.UnitPrice as productprice,product.Cost as productcost
    FROM product
    WHERE product.ProdID = $productId;");

if (mysqli_num_rows($allproducts) > 0) {
    $all_products = mysqli_fetch_all($allproducts, MYSQLI_ASSOC);
    // json_encode([],JSON_UNESCAPED_UNICODE) 參數一定要加才會正確顯示中文
    echo json_encode(["success" => 1, "products" => $all_products], JSON_UNESCAPED_UNICODE);
} else {
    echo json_encode(["success" => 0]);
  }
} else {$allproducts = mysqli_query($db_connection, "SELECT product.ProdID as productid,product.ProdName as productname,product.UnitPrice as productprice,product.Cost as productcost
  FROM product");
    if (mysqli_num_rows($allproducts) > 0) {
        $all_products = mysqli_fetch_all($allproducts, MYSQLI_ASSOC);
        // json_encode([],JSON_UNESCAPED_UNICODE) 參數一定要加才會正確顯示中文
        echo json_encode(["success" => 1, "products" => $all_products], JSON_UNESCAPED_UNICODE);
    } else {
        echo json_encode(["success" => 0, "msg" => "hello"]);
      }
}

?>
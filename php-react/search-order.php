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
    isset($data->date1)
    && isset($data->date2)
    && !empty(trim($data->date1))
    && !empty(trim($data->date2))
) {
    $date1 = mysqli_real_escape_string($db_connection, trim($data->date1));
    $date2 = mysqli_real_escape_string($db_connection, trim($data->date2));
    $date1 = "'".$date1."'";
    $date2 = "'".$date2."'";

    $allOrder = mysqli_query($db_connection, "SELECT customer.CustName as customername,customer.CustId as customerid,sum(orderdetail.Qty*orderdetail.Discount*product.UnitPrice) as allprice,sum(orderdetail.Qty*(orderdetail.Discount*product.UnitPrice-product.Cost)) as alldiscountcost
    FROM customer,salesorder,orderdetail,product
    WHERE customer.CustId = salesorder.CustId
    AND salesorder.OrderId = orderdetail.OrderId
    AND orderdetail.ProdId = product.ProdID
    AND salesorder.OrderDate BETWEEN $date1 AND $date2
    GROUP BY customer.CustName,customer.CustId;");

if (mysqli_num_rows($allOrder) > 0) {
  $all_order = mysqli_fetch_all($allOrder, MYSQLI_ASSOC);
  // json_encode([],JSON_UNESCAPED_UNICODE) 參數一定要加才會正確顯示中文
  echo json_encode(["success" => 1, "orderdetile" => $all_order], JSON_UNESCAPED_UNICODE);
} else {
  echo json_encode(["success" => 0,"msg" => "查無此區間報表"]);
}}else {
  echo json_encode(["success" => 0, "msg" => $data]);
}
?>
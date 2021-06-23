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

    $allOrder = mysqli_query($db_connection,"SELECT salesorder.seq as seq, salesorder.OrderId as orderid,salesorder.EmpId as empid, salesorder.CustId as custid, salesorder.OrderDate as orderdate, salesorder.Descript as descript FROM `salesorder`;");
    $allproducts = mysqli_query($db_connection, "SELECT product.ProdID as productid,product.ProdName as productname,product.UnitPrice as productprice,product.Cost as productcost
        FROM product");
    $allUsers = mysqli_query($db_connection, "SELECT employee.EmpId as userid,employee.JobTitle as userjobtitle,employee.EmpName   as username,dept.DeptName as userdeptname
    FROM dept,employee
    WHERE dept.DeptId = employee.DeptId
    AND employee.EmpId =  '00001'
    And employee.Phone = '02-7613571'");

        if(mysqli_num_rows($allOrder) > 0){
            $all_orders = mysqli_fetch_all($allOrder, MYSQLI_ASSOC);
            if (mysqli_num_rows($allproducts) > 0) {
                $all_products = mysqli_fetch_all($allproducts, MYSQLI_ASSOC);
                if (mysqli_num_rows($allUsers) > 0) {
                    $all_users = mysqli_fetch_all($allUsers, MYSQLI_ASSOC);
                    echo json_encode(["success" => 1, "salesorders"=> $all_orders,"products" => $all_products,"users" => $all_users], JSON_UNESCAPED_UNICODE);
                } else {
                    echo json_encode(["success" => 0, "msg" => "one"], JSON_UNESCAPED_UNICODE);
                }
            } else {
                echo json_encode(["success" => 0, "msg" => "two"], JSON_UNESCAPED_UNICODE);
            }
            
        }else{
            echo json_encode(["success" => 0, "msg" => "three"], JSON_UNESCAPED_UNICODE);
        }
?>
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
    isset($data->EmpId)
    && isset($data->password)
    && !empty(trim($data->EmpId))
    && !empty(trim($data->password))
) {
    $userEmpId = mysqli_real_escape_string($db_connection, trim($data->EmpId));
    $userpassword = mysqli_real_escape_string($db_connection, trim($data->password));

    $userpassword = "'".$userpassword."'";

    $allUsers = mysqli_query($db_connection, "SELECT employee.EmpId as userid,employee.JobTitle as userjobtitle,employee.EmpName as username,dept.DeptName as userdeptname
    FROM dept,employee
    WHERE dept.DeptId = employee.DeptId
    AND employee.EmpId =  $userEmpId
    And employee.Phone = $userpassword");

if (mysqli_num_rows($allUsers) > 0) {
    $all_users = mysqli_fetch_all($allUsers, MYSQLI_ASSOC);
    // json_encode([],JSON_UNESCAPED_UNICODE) 參數一定要加才會正確顯示中文
    echo json_encode(["success" => 1, "users" => $all_users], JSON_UNESCAPED_UNICODE);
} else {
    echo json_encode(["success" => 0]);
  }
} else {$allUsers = mysqli_query($db_connection, "SELECT employee.EmpId as userid,employee.JobTitle as userjobtitle,employee.EmpName   as username,dept.DeptName as userdeptname
    FROM dept,employee
    WHERE dept.DeptId = employee.DeptId
    AND employee.EmpId =  '00001'
    And employee.Phone = '02-7613571'");
    if (mysqli_num_rows($allUsers) > 0) {
        $all_users = mysqli_fetch_all($allUsers, MYSQLI_ASSOC);
        // json_encode([],JSON_UNESCAPED_UNICODE) 參數一定要加才會正確顯示中文
        echo json_encode(["success" => 1, "users" => $all_users], JSON_UNESCAPED_UNICODE);
    } else {
        echo json_encode(["success" => 0]);
      }
}

?>
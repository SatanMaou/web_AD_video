<?php
$hostname = 'localhost';
$username = 'root';
$password = '';
$dbname = "SV_Videos";
$port = 3306;
$conn = mysqli_connect($hostname, $username, $password, $dbname, $port);

if (!$conn) {
    //die('Không thể kết nối: ' . mysqli_error($conn));
 exit();
}
//echo 'Kết nối thành công'; //xuat ra man hinh web
mysqli_set_charset($conn,"utf8");//bo dau tieng viet
?>
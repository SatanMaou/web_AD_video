<?php
require_once("config.php");

$filename = $_FILES['file']['name'];

$location = "../images/avatar/" . $filename;

if (move_uploaded_file($_FILES['file']['tmp_name'], $location)) {
    echo $filename;
} else {
    echo 0;
}

?>
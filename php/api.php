<?php
require_once("config.php");
$event = $_POST['event'];

switch ($event) {

    //kiểm tra thông tin đã nhập vào
    case "CheckInputData":
        $username = $_POST['Name'];
        $password = $_POST['Pass'];

        $sql = mysqli_query($conn,"SELECT * FROM `users` WHERE Name = '".$username."' AND Pass = '".$password."' ");

        $rows = mysqli_num_rows($sql);
        if($rows > 0){
            $res["success"] = 1;
        }else{
            $res["success"]=0;
        }

        echo json_encode($res);
        mysqli_close($conn);
        break;

    case "upVideoData":
        $name = $_POST['fileName'];
        $size = $_POST['fileSize'];
        $fileVideo = $_POST['ThumbVideo'];
        $time = $_POST['time'];

        //tạo ra 1 tên mới
        $file = explode('.',$name);
        $ext = end($file);
        $fakeName = substr(md5(uniqid(rand(1,6))), 0, 15).'.'.$ext;

        //chèn sort vào database
        $maxSort = mysqli_fetch_array(mysqli_query($conn, "SELECT MAX(`sort`) as `max` FROM `videos`"));
        $sort = $maxSort['max'] + 1;

        $sql = "INSERT INTO `videos`(`NameVideo`, `FakeName`, `size`, `ThoiLuong`, `sort`)".
        "VALUES ('".$name."', '".$fakeName."', '".$size."', '".$time."' ,'".$sort."');";
        if (mysqli_query($conn, $sql)) {
            $res["success"] = 1;  //thành công
        }else{
            $res["success"] = 0;
        }
        echo json_encode($res);
        mysqli_close($conn);
        break;

    case "showData":
        $mang = array();

        $sql = mysqli_query($conn, "SELECT * FROM `videos` ORDER BY `sort` ASC");
        while ($rows = mysqli_fetch_array($sql)) {

            $usertemp['id'] = $rows['ID'];
            $usertemp['name'] = $rows['NameVideo'];
            $usertemp['size'] = $rows['size'];
            $usertemp['time'] = $rows['ThoiLuong'];
            $usertemp['sort'] = $rows['sort'];

            array_push($mang, $usertemp);
        }
        $jsonData['items'] = $mang;
        echo json_encode($jsonData);
        mysqli_close($conn);
        break;

    case "deleteVideo":
        $name = $_POST['name'];

        $sql =  "DELETE FROM `videos` WHERE `NameVideo` = '".$name."' ";
        if (mysqli_query($conn, $sql)) {
            $res["success"] = 1;  //thành công
            $status = unlink("../videos/".$_POST['name']."");
        } else {
            $res["success"] = 0;
        }
        echo  json_encode($res);
        mysqli_close($conn);
        break;

    case "statistical":
        $mang = [];
        $sqlr = mysqli_query($conn, "select * from `videos`");
        $sqlt = mysqli_query($conn, "SELECT SUM(`ThoiLuong`) AS 'tong' FROM `videos`;");

        $rows = mysqli_num_rows($sqlr);
        while($row = mysqli_fetch_array($sqlt)){
            $time = $row['tong'];
        };
        $mang[]=$rows;
        $mang[]=$time;

        echo json_encode($mang);
        mysqli_close($conn);
        break;

    case "upLogoData":
        $mang =[];
        $user = $_POST['user'];
        $pass = $_POST['pass'];
        $logo = $_POST['fileName'];

        $sql = "UPDATE `users` SET `img`='".$logo."' WHERE `Name` = '".$user."' AND `Pass` = '".$pass."' ";
        if (mysqli_query($conn, $sql)) {
            $res["success"] = 1;  //thành công
        }else{
            $res['success'] = 0;
        }

        $mang[] = $res;
        $mang[] = $logo;
        echo json_encode($mang);
        mysqli_close($conn);
        break;

    case "showLogo":
        $name = $_POST['user'];
        $pass = $_POST['pass'];
        $mang=[];
        $sql =(mysqli_query($conn ,"SELECT `img` FROM `users` WHERE `Name` = '".$name."' AND `Pass` = '".$pass."' "));
        while($row = mysqli_fetch_array($sql)){
            $logo = $row['img'];
            $mang[]=$logo;
        };

        echo json_encode($mang);
        mysqli_close($conn);
        break;

    case "changeVideo":
        $ID1 = $_POST['objID1'];
        $ID2 = $_POST['objID2'];
        $sort1 = $_POST['objSort1'];
        $sort2 = $_POST['objSort2'];

        $obj_tmp_sort = $sort1;

        $sql1 = mysqli_query($conn,"UPDATE `videos` SET `sort`='".$sort2."' WHERE `ID` = '".$ID1."'");
        $sql2 =  mysqli_query($conn,"UPDATE `videos` SET `sort`='".$obj_tmp_sort."' WHERE `ID` = '".$ID2."'");

        if($sql1 && $sql2){
            $res["success"] = 1;
        }else{
            $res["success"] = 0;
        }

        echo json_encode($res);
        mysqli_close($conn);
        break;

    default:
        # code...
        break;
}
?>
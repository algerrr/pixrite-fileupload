<?php

// phpinfo();
// $target_dir     = "/var/www/vhosts/3dintegrationgroup.com/httpdocs/secure-file-upload/uploads/";
// $fileName       = basename($_FILES["fileToUpload"]["name"]);
// $target_file    = $target_dir . basename($_FILES["fileToUpload"]["name"]);
// $uploadOk       = 1;
// $fileTdype      = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
$postdata       = file_get_contents("php://input");
// $projectType    = $_POST['projectType'];
// $customerName   = $_POST['customerName'];
// $company        = $_POST['company'];
// $zipcode        = $_POST['zipcode'];
// $email          = $_POST['email'];
// $phone          = $_POST['phone'];
// $notes          = $_POST['notes'];
$action          = $_POST['action'];
$servername      = "localhost:3306";
//Prod Values
// $username       = "mstr_3digsfu";
// $password       = "_0b8fG6d";
// $dbName         = "3dig_sfu";
//dev Values
$username       = "root";
$password       = "";
$dbName         = "pixrite";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
// print "Connected successfully";

mysqli_select_db($conn, $dbName) or die( mysqli_error($conn) );

switch ($action) {
    case "findusers":
        echo "i is apple";
        break;
    case "bar":
        echo "i is bar";
        break;
    case "cake":
        echo "i is cake";
        break;
}

?>
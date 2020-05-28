<?php

// phpinfo();
$target_dir     = "/var/www/vhosts/3dintegrationgroup.com/httpdocs/secure-file-upload/uploads/";
$target_file    = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk       = 1;
$fileType       = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
$postdata       = file_get_contents("php://input");
$projectType    = $_POST['projectType'];
$customerName           = $_POST['customerName'];
$company        = $_POST['company'];
$zipcode        = $_POST['zipcode'];
$email          = $_POST['email'];
$phone          = $_POST['phone'];
$notes          = $_POST['notes'];


echo 'Here is some more debugging info:';
echo "<br>";
print_r($_FILES);
echo "<br>";
print_r($_POST);
echo "<br>";

echo "target_dir " . $target_dir;
echo "<br>";
echo "target_file " . $target_file;
echo "<br>";
echo "uploadOk " . $uploadOk;
echo "<br>";
echo "fileType " . $fileType;
echo "<br>";
echo "projectType " . $projectType;
echo "<br>";
echo "customerName " . $customerName;
echo "<br>";
echo "company " . $company;
echo "<br>";
echo "zipcode " . $zipcode;
echo "<br>";
echo "email " . $email;
echo "<br>";
echo "phone " . $phone;
echo "<br>";
echo "notes " . $notes;
echo "<br>";

// Check if image file is a actual image or fake image
// if(isset($_POST["submit"])) {
//   $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
//   if($check !== false) {
//     echo "File is an image - " . $check["mime"] . ".";
//     $uploadOk = 1;
//   } else {
//     echo "File is not an image.";
//     $uploadOk = 0;
//   }
// }

// Check if file already exists
if (file_exists($target_file)) {
  echo "Sorry, file already exists.";
  echo "<br>";
  
  $uploadOk = 0;
}

// Check file size
// if ($_FILES["fileToUpload"]["size"] > 500000) {
//   echo "Sorry, your file is too large.";
//   $uploadOk = 0;
// }

// Allow certain file formats
if($fileType != "jpg" && $fileType != "png" && $fileType != "jpeg"
&& $fileType != "gif" && $fileType != "pdf") {
  echo "Sorry, only JPG, JPEG, PNG, GIF and PDF files are allowed.";
  echo "<br>";
  
  $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
  echo "Sorry, your file was not uploaded.";
  echo "<br>";
  
// if everything is ok, try to upload file
} else {
  if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
    echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
    echo "<br>";
    
  } else {
    echo "Sorry, there was an error uploading your file.";
    echo "<br>";
    
  }
}

//Send an email message
$msg = "Thank you for submitting a potential 3D Printing Project! One of our Design and Build Specialists will review your";
$msg = $msg . "\nCustomer Name: " . $customerName . " \nCompany: " . $company . " \nZip Code: " . $zipcode . " \nEmail: " . $email . " \nEmail: " . $phone . " \nNotes: " . $notes;

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("alger.brigham@gmail.com","My subject",$msg);
echo "sent email successful";
?>
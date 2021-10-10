<?php
// This file is archived as the implementation of handling attachment has been moved to index.php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

echo($_FILES['file']["tmp_name"]);

if  (!empty($_FILES['file']['name'])){
    //$oldmask = umask(0);
    $nameArray = explode('.', $_FILES['file']['name']);
    // $foldername = $nameArray[0];
    // echo $foldername;
    // mkdir($foldername, 0777); // give it 777 permission
    //umask($oldmask);

    //move the attachment to newly created folder
    $targetPath = './api/uploads/'.basename($_FILES['file']['name']);
    echo($targetPath);
    move_uploaded_file($_FILES['file']["tmp_name"], $targetPath);
    echo($_FILES['file']["tmp_name"]);
    // check if upload is success
    if (file_exists($targetPath)) {
      echo json_encode(array('success' => 'The file has successfully uploaded.'));
    } else {
      echo json_encode(array('error' => 'There is a problem uploading file.'));
    }
  }


  
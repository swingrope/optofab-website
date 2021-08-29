<?php

if  (!empty($_FILES['file']['name'])){
    $oldmask = umask(0);
    $nameArray = explode('.', $_FILES['file']['name']);
    // $foldername = $nameArray[0];
    // echo $foldername;
    // mkdir($foldername, 0777); // give it 777 permission
    umask($oldmask);

    //move the attachment to newly created folder
    $targetPath = './uploads/'.basename($_FILES['file']['name']);
    move_uploaded_file($_FILES['file']["tmp_name"], $targetPath);
    
  }
  header('Access-Control-Allow-Origin: *');
  header("Content-type: application/json"); // for response

  // check if upload is success
  if (file_exists($targetPath)) {
    echo json_encode(array('success' => 'The file has successfully uploaded.'));
  } else {
    echo json_encode(array('error' => 'There is a problem uploading file.'));
  }
  
<?php

// require('./api/Feedback.php');

// echo('hello');

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
header("Access-Control-Allow-Credential: true");

echo($_SERVER['REQUEST_URI']);

if ($_SERVER['REQUEST_URI'] === '/comp8715/optofab-website/backend/api/Feedback') {
    
    $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

    if ($contentType === "application/json") {
        $requestPayload = file_get_contents("php://input");
        $decodedJson = json_decode($requestPayload, true);
        
        require_once('./api/Feedback.php');
        $output = handleFeedBack($decodedJson);
        echo($output);

    }
 }


if ($_SERVER['REQUEST_URI'] === '/comp8715/optofab-website/backend/api/Attachment') {
    if  (!empty($_FILES['file']['name'])){
        $nameArray = explode('.', $_FILES['file']['name']);
    
        //move the attachment to newly created folder
        $targetPath = './api/uploads/'.basename($_FILES['file']['name']);
        move_uploaded_file($_FILES['file']["tmp_name"], $targetPath);
        echo($_FILES['file']["tmp_name"]);
        // check if upload is success
        if (file_exists($targetPath)) {
          echo json_encode(array('success' => 'The file has successfully uploaded.'));
        } else {
          echo json_encode(array('error' => 'There is a problem uploading file.'));
        }
      }
 }

 if ($_SERVER['REQUEST_URI'] === '/comp8715/optofab-website/backend/api/Modification') {
    $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

    if ($contentType === "application/json") {
        $requestPayload = file_get_contents("php://input");
        $decodedJson = json_decode($requestPayload, true);
        
        require_once('./api/Modification.php');
        $output = handleModification($decodedJson);
        echo($output);
    }
 }

 if ($_SERVER['REQUEST_URI'] === '/comp8715/optofab-website/backend/api/OrderRequest') {
    $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

    if ($contentType === "application/json") {
        $requestPayload = file_get_contents("php://input");
        require_once('./api/OrderRequest.php');
        $output = handleOrderRequest($requestPayload);
        echo($output);
    }
 }

 if ($_SERVER['REQUEST_URI'] === '/comp8715/optofab-website/backend/api/Satus') {
    $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

    if ($contentType === "application/json") {
        $requestPayload = file_get_contents("php://input");
        $decodedJson = json_decode($requestPayload, true);
        require_once('./api/Status.php');
        $output = handleSatus($decodedJson);
        echo($output);
    }
 }

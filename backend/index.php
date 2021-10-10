<?php
// index.php acts like a controller for different api endpoints 

// headers for response
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
header("Access-Control-Allow-Credential: true");

// echo($_SERVER['REQUEST_URI']); // for debug
echo("\n");

// api/Feedback: handle feedback page request
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

// api/Attachment: handle upload attachment function
if ($_SERVER['REQUEST_URI'] === '/comp8715/optofab-website/backend/api/Attachment') {

    if  (!empty($_FILES['file']['name'])){
        //move the attachment to newly created folder
        $targetPath = './api/uploads/'.basename($_FILES['file']['name']);
        // echo($_FILES['file']["name"]);
        // print_r($_FILES);
        move_uploaded_file($_FILES['file']["tmp_name"], $targetPath);
        
        // check if upload is success
        if (file_exists($targetPath)) {
          echo json_encode(array('success' => 'The file has successfully uploaded.'));
        } else {
          echo json_encode(array('error' => 'There is a problem uploading file.'));
        }
      }
 }

 // api/Modification: handle request from the modification page
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

 // api/OrderRequest: handle the submission of order request
 if ($_SERVER['REQUEST_URI'] === '/comp8715/optofab-website/backend/api/OrderRequest') {
    $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

    if ($contentType === "application/json") {
        $requestPayload = file_get_contents("php://input");
        require_once('./api/OrderRequest.php');
        $output = handleOrderRequest($requestPayload);
        echo($output);
    }
 }

 // api/Status: handle the status page request
 if ($_SERVER['REQUEST_URI'] === '/comp8715/optofab-website/backend/api/Status') {
    $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

    if ($contentType === "application/json") {
        $requestPayload = file_get_contents("php://input");
        $decodedJson = json_decode($requestPayload, true);
        require_once('./api/Status.php');
        // echo($decodedJson['ordernum']);
        // echo("\n");
        $output = handleSatus($decodedJson);
        echo($output);
    }
 }

<?php

require __DIR__ . 'Common.php';


// header
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

if ($contentType === "application/json") {
    $requestPayload = file_get_contents("php://input");
    $decodedJson = json_decode($requestPayload, true);
    $decodedJson = var_dump($decodedJson);
    $message = $decodedJson['feedback']; // need to match the key with front end
    if ($message == null) {
        echo json_encode(array('error' => 'The feedback is empty'));
    } else { 
        echo json_encode(array('success' => 'The feedback has been received'));
        sendEmail('Feedback', $message); // may add order id with it
    }

}


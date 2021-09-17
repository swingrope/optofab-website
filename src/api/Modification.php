<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require 'Common.php';
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

if ($contentType === "application/json") {
    $requestPayload = file_get_contents("php://input");
    $decodedJson = json_decode($requestPayload, true);
    
    $subject = "Order: ". $decodedJson['ordernum'] . ' New Modification Request';
    $message = $decodedJson['Modification'];

    $attachments = attchmentsToArray();
    

    sendEmail($subject, $message, $attachments);

}




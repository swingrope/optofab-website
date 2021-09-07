<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require __DIR__ . 'Common.php';
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

if ($contentType === "application/json") {
    $requestPayload = file_get_contents("php://input");
    $decodedJson = json_decode($requestPayload, true);
    $decodedJson = var_dump($decodedJson);
    $subject = $decodedJson['orderNum'] . ' Modification';
$message = $decodedJson['description'];

if ($decodedJson[attachmentName] != null) {
    $fileName = $decodedJson['attachmentName'];
    $path = './uploads' . $fileName;
    $attachment = array($path);
    sendEmail($subject, $message, $attachment);
}
else {
    sendEmail($subject, $message);
}
}




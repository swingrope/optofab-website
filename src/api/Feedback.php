<?php

require __DIR__ . 'Common.php';


// header
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$decodedJson = handlePostJson();
$message = $decodedJson['feedback']; // need to match the key with front end
if ($message == null) {
    echo json_encode(array('error' => 'The feedback is empty'));
} else { 
    echo json_encode(array('success' => 'The feedback has been received'));
    sendEmail('Feedback', $message); // may add order id with it
}

<?php

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
require __DIR__ . 'Common.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception; 

// header
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$decodedJson = handlePostJson();
$message = $decodedJson['feedback']; // need to match the key with front end
if ($message == null) {
    echo json_encode(array('error' => 'The feedback is empty'));
} else { 
    sendEmail('Feedback', $message); // may add order id with it
}

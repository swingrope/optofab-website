<?php
// header("Access-Control-Allow-Origin: http://localhost:3000");
// header('Access-Control-Allow-Headers: Content-Type');
// header("Access-Control-Allow-Credential: true");

// // header("Access-Control-Allow-Headers: *");
// header('Access-Control-Allow-Methods: POST, GET');

// header('Content-Type: application/json');
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception; 

/**
 * @param string $subject: the subject of the email
 * @param string $subject: the main body of the email
 * @param string array or NULL $attachments: the attachments path
 */

function sendEmail($subject, $msg, $attachments=NULL, $JsonFile=NULL) {
    $mail = new PHPMailer();
    $mail -> isSMTP();
    $mail -> Host = "smtp.gmail.com"; // maybe anu email server
    $mail -> SMTPAuth = "true";
    $mail -> SMTPSecure = "tls"; // may be different
    $mail -> Port = "587"; // may be different
    $mail -> Username = "anffoptofab.autotest@gmail.com"; // put correct email address
    $mail -> Password = "808909anff"; // put correct password
    $mail -> Subject = $subject; 
    $mail -> Body = $msg;
    if (!$attachments==NULL){
        foreach($attachments as $a){
            $mail -> addAttachment($a); 
        }
    }
    
    $mail -> setFrom("anffoptofab.autotest@gmail.com"); // put correct email address
    $mail -> addAddress("anffoptofab.autotest@gmail.com"); // put correct email address

    // delete the temporary attachment folder 
    if ($mail -> Send()){
        echo json_encode(array('success' => 'The email has been sent.'));
        // delete the temp folder
        if (!$attachments==NULL){
            foreach($attachments as $a){
                unlink($a);
            }
            
        }
    }
    else{
        echo json_encode(array('error' => 'There is a problem sending email.'));
        if (!$attachments==NULL){
            foreach($attachments as $a){
                unlink($a);
            }
        }
    }

    $mail -> smtpClose();
}

/**
 * @return the decoded JSON object received via POST method
 */
function handlePostJson() {
    $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
    if ($contentType === "application/json") {
    $requestPayload = file_get_contents("php://input");
    $decodedObject = json_decode($requestPayload, true);
    $decodedObject = var_dump($decodedObject);
    return $decodedObject;
  }
}

// How to grant file write access on Mac with XAMPP
// Under General Tab, in XAMPP app, click Open Terminal
// A terminal will be launched with something like, root@debian:~#, on the terminal shell
// on that terminal shell, type, chmod -R 0777  /opt/lampp/htdocs/ and enter
// Exit, the terminal and you be good to go
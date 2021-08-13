<?php
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

function sendEmail($subject, $msg, $attachments=NULL) {
    $mail = new PHPMailer();
    $mail -> isSMTP();
    $mail -> Host = "smtp.gmail.com"; // maybe anu email server
    $mail -> SMTPAuth = "true";
    $mail -> SMTPSecure = "tls"; // may be different
    $mail -> Port = "587"; // may be different
    $mail -> Username = "anffoptofab.autotest@gmail.com"; // put correct email address
    $mail -> Password = "808909anff"; // put correct password
    $mail -> Subject = $subject; 
    $mail -> Body = $message;
    if (!$attachments==NULL){
        foreach($attachments as $a){
            $mail -> addAttachment($a); 
        }
    }
    $mail -> setFrom("anffoptofab.autotest@gmail.com"); // put correct email address
    $mail -> addAddress("anffoptofab.autotest@gmail.com"); // put correct email address

    // delete the temporary attachment folder 
    if ($mail -> Send()){
        echo "sent";
        // delete the temp folder
        if (!$attachments==NULL){
            foreach($attachments as $a){
                unlink($a);
            }
            
        }
    }
    else{
        echo "not sent";
        if (!$attachments==NULL){
            foreach($attachments as $a){
                unlink($a);
            }
        }
    }

    $mail -> smtpClose();
}
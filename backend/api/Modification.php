<?php
function handleModification($decodedJson){
    require 'Common.php';

    $subject = "Order: ". $decodedJson['ordernum'] . ' New Modification Request';
    $message = $decodedJson['Modification'];

    $attachments = attchmentsToArray();
    
    sendEmail($subject, $message, $attachments);

}





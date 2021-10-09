<?php
// This function takes in information from the modification page and 
// parse the information into email message, check for any uploaded attachments
// then send the email to ANFF OptoFab
function handleModification($decodedJson){
    require 'Common.php';

    $subject = "Order: ". $decodedJson['ordernum'] . ' New Modification Request';
    $message = $decodedJson['Modification'];

    $attachments = attchmentsToArray();
    
    sendEmail($subject, $message, "anffoptofab.autotest@gmail.com", $attachments);

}





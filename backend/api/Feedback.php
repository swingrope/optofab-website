<?php

// This function takes in information from the feedback page and 
// parse the information into email and send to ANFF OptoFab
function handleFeedBack($decodedJson){

    require 'Common.php';

    $message = $decodedJson['feedback']; // need to match the key with front end
    $orderNum = $decodedJson['ordernum'];
    // echo($message);
    if ($message == null) {
        echo json_encode(array('error' => 'The feedback is empty'));
    } else { 
        echo json_encode(array('success' => 'The feedback has been received'));
        sendEmail('Feedback '.$orderNum, $message, "anffoptofab.autotest@gmail.com"); // may add order id with it
    }

    
}



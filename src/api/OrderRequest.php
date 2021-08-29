<?php

require 'Common.php';

$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

if ($contentType === "application/json") {
    $requestPayload = file_get_contents("php://input");
    file_put_contents("OrderRequest.json", $requestPayload);
    $jsonIterator = new RecursiveIteratorIterator(
        new RecursiveArrayIterator(json_decode($requestPayload, TRUE)),
        RecursiveIteratorIterator::SELF_FIRST);
    
    // get order info from the json
    $attachments = array();
    $attachments[] = "OrderRequest.json";
    $message = "";

    foreach ($jsonIterator as $key => $val) {
        if (is_array($val)){
            $message.=$key;
            $message.="\n";
        }
        else {
            if (strpos($key, 'file')!==false){
                $tempArray = explode(':', $key, 3);
                if (count($tempArray)==3){
                    $fileName = $tempArray[2];
                    $fileName = substr($fileName, 1);
                    $nameArray = explode('.', $fileName);
                    $path = './uploads' . $fileName;
                    $message.=$key;
                    $message.="\n";
                    $attachments[] = $path;
                    continue;
                }else continue;
                
            }
            $message.=$key;
            $message.= " : ";
            $message.=$val;
            $message.= "\n";
        }
    }


    echo($message);

    // send email
  if ($attachments != null) {
    sendEmail('New Order Request', $message, $attachments);
    
    }
    else {
        sendEmail('New Order Request', $message);
    }
    
}

  

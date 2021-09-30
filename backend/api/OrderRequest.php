<?php
// This function takes in information from the order request page and 
// parse the information into email message, check for any uploaded attachments
// then send the email to ANFF OptoFab
function handleOrderRequest($requestPayload){
    require 'Common.php';

    file_put_contents("OrderRequest.json", $requestPayload);
    $jsonIterator = new RecursiveIteratorIterator(
        new RecursiveArrayIterator(json_decode($requestPayload, TRUE)),
        RecursiveIteratorIterator::SELF_FIRST);
    
    $attachments =  attchmentsToArray(); // get potential attachments
    $attachments[] = "OrderRequest.json";
    $message = "";
    
    // append key value pair in JSON to the email message body
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

    
    sendEmail("New Order Request", $message, $attachments);
    
    
}


  

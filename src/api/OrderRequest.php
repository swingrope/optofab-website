<?php

require __DIR__ . 'Common.php';

$decodedJson = handlePostJson();

// get order info from the json
$attachments = array();
$message = "Order information: \n\n";
foreach($decodedJson['orderInfo'] as $key => $value){
    if (strpos($key, 'file')!==false){
        $tempArray = explode(':', $key, 3);
        if (count($tempArray)==3){
            $fileName = $tempArray[2];
            $fileName = substr($fileName, 1);
            $nameArray = explode('.', $fileName);
            $path = './uploads' . $fileName;
            $message.=$key;
            $message.="\n";
            array_push($path);
            continue;
        }else continue;
        
    }
    $message.=$key;
    $message.= " : ";
    $message.=$value;
    $message.= "\n";
}

// get customer info from the json
$message .= "\nCustomoer information: \n\n";
foreach($decodedJson['customerInfo'] as $key => $value){
    $message.=$key;
    $message.= " : ";
    $message.=$value;
    $message.= "\n";
  }
  
// send email
  if ($attachments != null) {
    sendEmail('New Order Request', $message, $attachment);
}
else {
    sendEmail('New Order Request', $message);
}
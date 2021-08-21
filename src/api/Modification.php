<?php

require __DIR__ . 'Common.php';

$decodedJson = handlePostJson();

$subject = $decodedJson['orderNum'] . ' Modification';
$message = $decodedJson['description'];

if ($decodedJson[attachmentName] != null) {
    $fileName = $decodedJson['attachmentName'];
    $path = './uploads' . $fileName;
    $attachment = array($path);
    sendEmail($subject, $message, $attachment);
}
else {
    sendEmail($subject, $message);
}


<?php
function handleSatus($decoded){
    $orderStatus = array();
    $currentPart = array();
    
    if(! is_array($decoded)) {
        echo '{"partNumber":"error", "status":"error"}'; //fail to get order id from html/js
    } else {
        $ordernum = $decoded['ordernum'];
        $jsonFile = file_get_contents('./api/status.json');
        $jsonIterator = new RecursiveIteratorIterator(
            new RecursiveArrayIterator(json_decode($jsonFile, TRUE)),
            RecursiveIteratorIterator::SELF_FIRST);
        $orderexist = FALSE;
        foreach ($jsonIterator as $key => $val) {
            if ($key==$ordernum) { //if found the order, return the part number and status
                if (count($val) > 0) {
                    foreach ($val as $part => $partStatus) {
                        $currentPart = array('partNumber' => $part, 'status' => $partStatus);
                        array_push($orderStatus, $currentPart);
                    }
                    echo json_encode($orderStatus);
                } else { //if no status founded, return order number and "No Status founded"
                    $currentPart = array('partNumber' => $ordernum, 'status' => 'No Status founded' );
                    array_push($orderStatus, $currentPart);
                    echo json_encode($orderStatus);
                }
                $orderexist = TRUE;
            }
        }
        // if the inputted order id is not in the json file, echo inputted order and "No order founded"
        if (!$orderexist) {
            // $OrderStatus = json_encode("noSuchOrder");
            $currentPart = array('partNumber' => $ordernum, 'status' => 'No Order founded' );
            array_push($orderStatus, $currentPart);
            echo json_encode($orderStatus);
        }
    }
}



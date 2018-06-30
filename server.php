<?php

    $name = $_POST['user-name'];
    $phone = $_POST['user-tel'];
    $street = $_POST['user-steet'];
    $house = $_POST['user-house'];
    $entrance = $_POST['user-entrance'];
    $apart = $_POST['user-apart'];
    $floor = $_POST['user-floor'];
    $message = $_POST['user-message'];
    $pay = $_POST['pay-option'];
  
    $disturb = $_POST['dont-disturb']; // 1 или null 
    $disturb = isset($disturb) ? 'НЕТ' : 'ДА'; 

    $mail_message = '
    <html>
        <head>
            <title>Заказ</title>
        </head>
        <body>
            <h2>Заказ</h2>
            <ul>
                <li>Имя: ' . $name . '</li>
                <li>Тел: ' . $phone . '</li>
                <li>Улица: ' . $street . '</li>
                <li>Дом: ' . $house . '</li>
                <li>Корпус: ' . $entrance . '</li>
                <li>Квартира: ' . $apart . '</li>
                <li>Этаж: ' . $floor . '</li>
                <li>Коментарий: ' . $message . '</li>
                <li>Способ оплаты: ' . $pay . '</li>
                <li>Нужно ли перезванивать: ' . $disturb . '</li>
            </ul>
        </body>
    </html>    
    ';

    $headers = "From: Администратор сайта <'maksimiliv@gmail.com'>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('maksimiliv@gmail.com', 'Заказ', $mail_message, $headers);

    $data = [];
    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Сообщение успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);
?>
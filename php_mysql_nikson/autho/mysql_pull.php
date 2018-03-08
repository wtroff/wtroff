<?php


$dsn = "mysql:host=localhost; dbname=publications";
$db_login = "root";
$db_password = "";


try{
    $db_server = new PDO($dsn, $db_login, $db_password);
    $sth= $db_server->prepare('SELECT author,title,year FROM classics WHERE year=:date1 OR year=:date2');
    $params= array(
        'date1' => '1811',
        'date2' => '1856',
    );
    $sth->execute($params);
    $books = $sth->fetchAll(PDO::FETCH_ASSOC);
    print_r($books);
} catch(PDOException $e){

    echo $e->getMessage();
}



<?php
$user="root";
$pass="Vf8!0fs9";


try {

    $dbh = new PDO('mysql:host=localhost;dbname=escape_game', 'root',"123");
    $dbh->query('SELECT * from degreakaton');
 
} catch (PDOException $e) {
    print "Erreur !: " . $e->getMessage() . "<br/>";
    die();
}
?>
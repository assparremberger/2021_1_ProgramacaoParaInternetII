<?php 

    header("Content-type: application/json");

    $conn = mysqli_connect("localhost", "root", "", "pi2_loja_2021_1");

    if( $conn ){
        $query = "SELECT * FROM produto";
 //       $query = "SELECT id AS codigo, nome FROM produto";
        $result = mysqli_query($conn, $query);
        $linhas = array();
        while( $row = mysqli_fetch_assoc($result) ){
            $linhas[] = $row;
        }
        mysqli_close( $conn );
        
        echo '{ "produtos" : '.json_encode( $linhas).' } ';

    }
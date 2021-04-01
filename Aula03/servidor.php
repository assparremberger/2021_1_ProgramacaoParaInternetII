<?php
$valor = $_POST["valor"];
$conteudo = "";
for( $i = 1; $i <= $valor; $i++){
    $conteudo = $conteudo.$i."<br>";
}
echo $conteudo;
?>
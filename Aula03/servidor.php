<?php
$valor = $_GET["valor"];
$conteudo = "";
for( $i = 1; $i <= $valor; $i++){
    $conteudo = $conteudo.$i."<br>";
}
echo $conteudo;
?>
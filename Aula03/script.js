function ler() {
    var xhttp = new XMLHttpRequest();

    var divResult = document.getElementById("resultado");
    divResult.innerHTML = "Carregando...";

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            divResult.innerHTML = this.responseText;
        } else {
            divResult.innerHTML = "Tivemos um probleminha!!!" + this.status;
        }
    };
    xhttp.open("GET", "informacoes.txt", true);
    xhttp.send();
}

function gerarNumeros() {

    var http = new XMLHttpRequest();
    var divNumeros = document.getElementById("divNumeros");
    divNumeros.innerHTML = "Carregando...";
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            divNumeros.innerHTML = this.responseText;
        }
    };

    var valor = document.getElementById("txtValor").value;
    http.open("GET", "servidor.php?valor=" + valor, true);
    http.send();

}
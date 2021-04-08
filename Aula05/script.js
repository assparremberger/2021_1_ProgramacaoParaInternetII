function lerXML() {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            dadosXML = this.responseXML;
            produtos = dadosXML.getElementsByTagName("produto");
            texto = "";
            for (i = 0; i < produtos.length; i++) {
                nome = produtos[i].getElementsByTagName("nome");
                preco = produtos[i].getElementsByTagName("preco");

                texto += "Nome: " + nome[0].childNodes[0].nodeValue + "<br>";
                texto += "Preco: " + preco[0].childNodes[0].nodeValue + "<br><br>";
            }
            document.getElementById("divXML").innerHTML = texto;
        }
    };
    http.open("GET", "dados.xml", true);
    http.send();
}
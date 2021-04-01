function lerJson() {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var objJS = JSON.parse(this.responseText);
            var divObjeto = document.getElementById("divObjeto");
            divObjeto.innerHTML = "Nome: " + objJS.nome + "<br>Idade: " + objJS.idade;

            var textFilhos = "Filhos: ";
            objJS.filhos.forEach(filho => {
                textFilhos += "<br>" + filho.nome
            });
            document.getElementById("divFilhos").innerHTML = textFilhos;

            var divJSON = document.getElementById("divJSON");
            divJSON.innerHTML = JSON.stringify(objJS);
        }
    };
    http.open("GET", "meuJson.json", true);
    http.send();
}
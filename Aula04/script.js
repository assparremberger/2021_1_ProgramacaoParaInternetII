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


function lerServidor() {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var objJSON = JSON.parse(this.responseText);
            const produtos = objJSON.produtos;
            conteudo = " <table border='1' >";
            conteudo += "   <tr>";
            conteudo += "       <th>Id</th>";
            conteudo += "       <th>Nome</th>";
            conteudo += "   </tr>";

            produtos.forEach(prod => {
                conteudo += "<tr>";
                conteudo += "   <td>" + prod.id + "</td>";
                conteudo += "   <td>" + prod.nome + "</td>";
                conteudo += "</tr>";
            });

            conteudo += " </table>";
            document.getElementById("divProdutos").innerHTML = conteudo;
        }
    };
    http.open("GET", "servidor.php", true);
    http.send();
}
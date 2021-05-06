const banco = require('mysql');
const conn = banco.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pi2_loja_2021_1"
});
conn.connect(function(erro) {
    if (!erro) {
        conn.query("SELECT * FROM produto", function(err, result, fields) {
            if (!err) {
                console.log(result);
            } else {
                console.log(err);
            }
        });
    } else {
        console.log(erro);
    }
});
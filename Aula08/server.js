const restify = require('restify');;
const errors = require('restify-errors');

const servidor = restify.createServer({
    name: 'Loja',
    version: '1.0.0'
});

servidor.use(restify.plugins.acceptParser(servidor.acceptable));
servidor.use(restify.plugins.queryParser());
servidor.use(restify.plugins.bodyParser());

servidor.listen(8001, function() {
    console.log("%s executando em %s", servidor.name, servidor.url);
});

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'loja_ap2'
    }
});


servidor.get('/', (req, res, next) => {
    res.send("Bem-vindo à nossa Loja");
});

servidor.get('/produto', (req, res, next) => {
    knex('produto').then((dados) => {
        res.send(dados)
    }, next);
});

servidor.get('/produto/:id', (req, res, next) => {
    const idProd = req.params.id;
    knex('produto')
        .where('id', idProd)
        .first()
        .then((dados) => {
            if (!dados) {
                return res.send(new errors.BadRequestError('Produto não encontrado'));
            }
            res.send(dados)
        }, next);
});

servidor.post('/produto', (req, res, next) => {
    knex('produto')
        .insert(req.body)
        .then((dados) => {
            res.send(dados)
        }, next);
});

servidor.put('/produto/:id', (req, res, next) => {
    const idProd = req.params.id;
    knex('produto')
        .where('id', idProd)
        .update(req.body)
        .then((dados) => {
            if (!dados) {
                return res.send(new errors.BadRequestError('Produto não encontrado'));
            }
            res.send(dados)
        }, next);
});

servidor.delete('/produto/:id', (req, res, next) => {
    const idProd = req.params.id;
    knex('produto')
        .where('id', idProd)
        .delete()
        .then((dados) => {
            if (!dados) {
                return res.send(new errors.BadRequestError('Produto não encontrado'));
            }
            res.send(dados)
        }, next);
});
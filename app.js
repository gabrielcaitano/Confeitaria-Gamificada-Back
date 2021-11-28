var app = require('./config/server');

var conexao = require('./config/conexao');

var rotapass = require('./pass');

var rotacliente = require('./cliente')(app,conexao);

var rotaemail = require('./email')(app);

var rotalogin = require('./login')(app,conexao,rotapass);

var rotacadastro = require('./cadastro')(app,conexao,rotapass);

var rotaproduto = require('./produto')(app,conexao);

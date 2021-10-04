var app = require('./config/server');

var conexao = require('./config/conexao');

var rotacliente = require('./cliente')(app,conexao);

var rotaemail = require('./email')(app);

var rotalogin = require('./login')(app,conexao);
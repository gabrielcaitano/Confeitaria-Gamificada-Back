var mysql = require('mysql');
var conexao = mysql.createConnection({
    host : '150.230.67.50',
    user : 'gabriel',
    password : 'pTA5ass#298!',
    database : 'confeitaria_pumpkitty'
});

module.exports = conexao;
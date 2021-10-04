var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.listen(3000, () =>{

    console.log("🦕 ... 🦕 Servidor Rodando 🌎 ... ☄️");

});

module.exports = app;
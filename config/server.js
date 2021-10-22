var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var app = express();

const corsConfig ={
    origin:'http://localhost:3000', 
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsConfig));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.set('view engine', 'ejs');

app.listen(5000, () =>{

    console.log("🦕 ... 🦕 Servidor Rodando 🌎 ... ☄️");

});

module.exports = app;
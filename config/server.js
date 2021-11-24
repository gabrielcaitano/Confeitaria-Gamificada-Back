const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();

const corsConfig ={
    origin:'http://localhost:3000', 
    credentials:true,
    optionSuccessStatus:200
};

app.use(cors(corsConfig));

const umDia = 1000 * 60 * 60 * 24;

app.use(session({
    secret: 'pumpkitty',
    saveUninitialized: true,
    cookie: { maxAge: umDia },
    resave: true
}));

app.use(cookieParser());

app.locals.session;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(5000, () =>{
    console.log("🦕 ... 🦕 Servidor Rodando 🌎 ... ☄️");
});

module.exports = app;
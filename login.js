module.exports = function (app, conexao) {

    const bcrypt = require('bcrypt');
    var jwt = require('jsonwebtoken');

    app.post('/login', (req, res) => {
        
        Email = req.body.email.trim(), Senha = req.body.senha.trim();

        conexao.query("select nome, id_cliente, senha from cliente where email = ?", Email, (error, result) => {

            if (result != '') {

                var senhaHash = result[0].senha;

                if(bcrypt.compareSync(Senha, senhaHash)){
                    var usuario = result[0].nome;
                    res.json('Sucesso');
                    console.log('Usuario logado: ' + usuario)

                    session = req.session;
                    session.userID = result[0].id_cliente;

                    console.log(session);
                }else {
                    res.json(null);
                    console.log('Erro ao logar!')
                }

            }
            else {
                res.json(null);
                console.log('Erro ao logar!')
            }

        });
    })

    app.get('/login', (req, res) => {

        if (typeof session === 'undefined' || !session.userID) {
            res.json(null);
            console.log('Nenhuma sessão criada!')
        } else {
            var tokenID = jwt.sign(session.userID, 'HS256')
            res.json(tokenID);
            console.log('Sessão aberta: "' + session.userID + '", TOKEN INFORMADO: ' + tokenID)
        }

    })

    app.get('/logout', (req, res) => {

        req.session.destroy();
        session = req.session;
        console.log('Sessão destruida');
        res.json('Sessão finalizada')

    });

}
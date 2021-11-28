module.exports = function (app, conexao) {

    app.post('/login', (req, res) => {

        Email = req.body.email.trim(), Senha = req.body.senha.trim();

        conexao.query("select nome, id_cliente from cliente where email = ? and senha = ?", [Email, Senha], (error, result) => {

            if (result != '') {
                var usuario = result[0].nome;
                res.json('Sucesso');
                console.log('Usuario logado: ' + usuario)

                session = req.session;
                session.userID = result[0].id_cliente;

                console.log(session);

            } else {
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
            res.json(session.userID);
            console.log(session);
        }

    })

    app.get('/logout', (req, res) => {

        req.session.destroy();
        session = req.session;
        console.log('Sessão destruida');
        res.json('Sessão finalizada')

    });

}
module.exports = function (app, conexao) {

    app.get('/cliente', (req, res) => {

        if (typeof session === 'undefined' || !session.userID) {
            console.log('Nenhuma sessão criada!')
            res.json(null);
        } else {
            conexao.query("select nome, dataNasc, cpf, celular, cep, email, rua, bairro, numero from cliente where id_cliente = ?", session.userID, (error, result) => {

                if (result != '') {
                    res.json(result);
                    console.log('Dados do cliente retornado!');
                } else {
                    res.json(error);
                    console.log('Erro ao retornar cliente');
                }
            });
        }
    })

    app.post('/attcliente', (req, res) => {

        CEP = req.body.cep.trim(), Rua = req.body.logradouro.trim(), Numero = req.body.numero.trim(), Bairro = req.body.bairro.trim();

        conexao.query("update cliente set cep = ?, rua = ?, bairro = ?, numero = ?  WHERE id_cliente = 1;", [CEP, Rua, Bairro, Numero], (error, result) => {

            if (result != '') {
                res.json('Sucesso');
                console.log('Dados atualizados');
            } else {
                res.json(null);
                console.log('Erro ao atualizar');
            }
        });

    })

    app.get('/delcliente', (req, res) => {

        conexao.query("delete from cliente where id_cliente = ?", session.userID, (error, result) => {

            if (result != '') {
                res.json('Sucess');
                console.log('Usuario deletado com sucesso!');
            } else {
                res.json(null);
                console.log('Erro ao deletar usuario!');
            }
        });

    });
}
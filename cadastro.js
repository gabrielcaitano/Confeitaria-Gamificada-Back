module.exports = function (app, conexao) {

    const bcrypt = require('bcrypt');

    app.post('/cadastro', (req, res) => {
        
        //variaveis
        Nome = req.body.nome.trim(), Data = req.body.nascimento.trim(), CPF = req.body.cpf.trim(), Email = req.body.email.trim(), Celular = req.body.celular.trim(), CEP = req.body.cep.trim(), Rua = req.body.logradouro.trim(), Numero = req.body.numero.trim(), Bairro = req.body.bairro.trim(), Senha = req.body.senha.trim();

        conexao.query("select count(*) as total from cliente where email = ? or CPF = ?", [Email, CPF], (error, result) => {
            var confereUsuario = result[0].total;

            if (confereUsuario == 0) {

                const hash = bcrypt.hashSync(Senha, 10);
                
                conexao.query("insert into cliente(nome,dataNasc,cpf,email,celular,cep,rua,numero,bairro,senha)values(?,?,?,?,?,?,?,?,?,?)", [Nome, Data, CPF, Email, Celular, CEP, Rua, Numero, Bairro, hash], (error, result) => {

                    if (!error) {
                        res.json('Sucesso');
                        console.log('Usuario Cadastrado com sucesso!');

                    } else {
                        res.json(null);
                        console.log('Erro ao inserir o cliente!');
                    }
                });

            } else {
                console.log('Usuario ja cadastrado');
                res.json(null);
            }
        });

    })

}
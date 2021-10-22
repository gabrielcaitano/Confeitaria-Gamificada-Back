module.exports = function(app,conexao){

    app.post('/cadastro',(req,res) =>{

        //variaveis
        Nome = req.body.nome.trim(), Data = req.body.nascimento.trim(), CPF = req.body.cpf.trim(), Email = req.body.email.trim(), Celular = req.body.celular.trim(), CEP = req.body.cep.trim(), Rua = req.body.logradouro.trim(), Numero = req.body.numero.trim(), Bairro = req.body.bairro.trim(), Senha = req.body.senha.trim();

        conexao.query("select count(*) as total from cliente where email = ?",Email,(error,result) =>{
            var confereUsuario = result[0].total;

            if(confereUsuario == 0){
                conexao.query("insert into cliente(nome,sobrenome,cpf,email,celular,cep,rua,numero,bairro,senha)values(?,?,?,?,?,?,?,?,?,?)",[Nome,Sobrenome,CPF,Email,Celular,CEP,Rua,Numero,Bairro,Senha],(error,result) => {
                    if(!error){
                        res.json(result);
                        console.log('Cliente inserido com sucesso!');
                    }else{
                        res.json(error);
                        console.log('Erro ao inserir o cliente!');
                    }
                });
            }else{
                console.log('Email ja cadastrado!');
                res.send('Email ja cadastrado!');
            }
        });

    })

}
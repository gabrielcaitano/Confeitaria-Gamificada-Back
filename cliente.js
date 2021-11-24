module.exports = function(app,conexao){

    app.get('/cliente', (req,res) =>{

        conexao.query("select nome, dataNasc, cpf, celular, cep, email, numero from cliente where id_cliente = ?",session.userID, (error,result) => {

            if(result != ''){
                res.json(result);
                console.log('Dados do cliente retornado!');
            }else{
                res.json(error);
                console.log('Erro ao retornar cliente');
            }
        });
    })
    
    app.post('/attcliente', (req,res) =>{

        Email = req.body.email.trim(), Celular = req.body.celular.trim(), CEP = req.body.cep.trim(), Rua = req.body.logradouro.trim(), Numero = req.body.numero.trim(), Bairro = req.body.bairro.trim();

        conexao.query("update cliente set celular = ?, cep = ?, email = ?, rua = ?, bairro = ?, numero = ?  WHERE id_cliente = 1;",[Celular,CEP,Email,Rua,Bairro,Numero], (error,result) => {

            if(result != ''){
                res.json(result);
                console.log('Dados atualizados');
            }else{
                res.json(error);
                console.log('Erro ao atualizar');
            }
        });

    })
}
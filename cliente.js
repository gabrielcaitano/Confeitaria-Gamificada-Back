const email = require("./email");

module.exports = function(app,conexao){

    app.put('/retornacliente/:id',(req, res) =>{

        conexao.query('select * from cliente',(error, result) =>{
            if(!error){
                res.json(result);
                console.log('Clientes retornados com sucesso!');
            }else{
                res.json(error);
                console.log('Erro ao retornar cliente!')
            }
        });

    })

    app.post('/inserecliente',(req,res) =>{

        Nome = req.body.Nome, Sobrenome = req.body.Sobrenome, CPF = req.body.CPF, Email = req.body.Email, Celular = req.body.Celular, CEP = req.body.CEP, Rua = req.body.Rua, Numero = req.body.Numero, Bairro = req.body.Bairro, Senha = req.body.Senha;

        conexao.query("insert into cliente(nome,sobrenome,cpf,email,celular,cep,rua,numero,bairro,senha)values(?,?,?,?,?,?,?,?,?,?)",[Nome,Sobrenome,CPF,Email,Celular,CEP,Rua,Numero,Bairro,Senha],(error,result) => {
            if(!error){
                res.json(result);
                console.log('Cliente inserido com sucesso!');
            }else{
                res.json(error);
                console.log('Erro ao inserir o cliente!');
            }
        });

    })

    app.delete('/deletacliente/:id',(req,res) =>{

        var { id } = req.params;

        conexao.query('delete from cliente where id_cliente = ?',id,(error, result) =>{
            if(!error){
                res.json(result);
                console.log('Cliente deletado com sucesso!');
            }else{
                res.json(error);
                console.log('Erro ao deletar o cliente!');
            }
        });

    })
}
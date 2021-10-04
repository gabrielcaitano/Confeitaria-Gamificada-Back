const email = require("./email");

module.exports = function(app,conexao){

    app.post('/login',(req,res)=>{

        CPF = req.body.CPF, Senha = req.body.Senha;

        conexao.query("select nome from cliente where cpf = ? and senha = ?",[CPF,Senha], (error,result) => {   

        if (result != ''){
            var usuario = result[0].nome;
            res.status(200).send('Bem Vindo ' + usuario);
            console.log('Logado com sucesso!')
        }else{
            res.status(200).send('Dados inválidos');
            console.log('Erro ao logar!')
        }
        
        
        });
    })

}
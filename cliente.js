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
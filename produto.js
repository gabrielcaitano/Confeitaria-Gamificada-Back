module.exports = function(app,conexao){

    app.post('/produto', (req,res) =>{
        Categoria = req.body.categoria;

        conexao.query('select * from produto where categoria = ?', Categoria,(error, result) =>{

            if(result != ''){
                res.json(result);
                console.log('Produto retornado com sucesso!');
            }else{
                res.json(error);
                console.log('Falha ao retornar produto!');
            }
        });
    })
}
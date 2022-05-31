module.exports = function (app, conexao) {

    app.post('/score', (req, res) => {

        Score = req.body.scored

        if (typeof session === 'undefined' || !session.userID) {
            console.log('Nenhuma sessão criada!')
        }
        else {
            conexao.query("select score, coin from cliente where id_cliente = ?", session.userID, (error, result) => {

                dbScore = result[0].score
                attScore = Score + dbScore
                dbCoin = result[0].coin

                while (attScore >= 100) {
                    dbCoin += 1
                    attScore -= 100
                }

                conexao.query("update cliente set score = ?, coin = ?  WHERE id_cliente = ?", [attScore, dbCoin, session.userID], (error, result) => {

                    if (result != '') {

                        console.log('Coins atualizados com sucesso!')

                    } else {

                        console.log('Erro ao atualizar coin!')

                    }

                })
            });
        }
    })

    app.get('/coin', (req, res) => {
        if (typeof session === 'undefined' || !session.userID) {
            console.log('Nenhuma sessão criada!')
            res.json(null)
        } else {
            conexao.query("select coin from cliente where id_cliente = ?", session.userID, (error, result) => {

                if (result != '') {
                    res.json(result[0].coin)
                    console.log('Coin retornado com sucesso!')
                } else {
                    console.log('Erro')
                }
            });
        }
    })
}